import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import Songs from './Pages/Songs/Songs';
import Navbar from './Components/Navbar/Navbar';
import User from './Pages/User/User';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Videos from './Pages/Videos/Videos';
import Quotes from './Pages/Quotes/Quotes';
import Stories from './Pages/StoriesComp/Stories';
import NewStory from './Pages/NewStory/NewStory';
import ShowStory from './Pages/ShowStory/ShowStory';
import Characters from './Pages/Characters/Characters';
import Comics from './Pages/Comics/Comics';
import Home from './Pages/Home/Home';

import { auth,createUser } from './firebase/firebaseConfig';

function App() {

  const [currentuser, setCurrentuser] = useState({});

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      if(user){
        const userRef = await createUser(user);
        
        userRef.onSnapshot(snapshot => {
          setCurrentuser({
            id:snapshot.id,
            ...snapshot.data()
            })
        })
      }
      else{
        setCurrentuser(user)
      }
    })

      return () => {
        unsubscribeFromAuth();
      }  
  }, [])

  return (
    <div className="App">
      <Router>
        <Header user={currentuser} />
        <div className="container">
          <Navbar />
          <Switch>
              <Route path='/comics' component={Comics} />
              <Route path='/sign-up' component={SignUp} />
              <Route path='/sign-in' component={SignIn} />
              <Route path='/songs' component={Songs} />
              <Route path='/stories/:storyId' component={ShowStory} />
              <Route path='/stories' component={() => <Stories user={currentuser} />} />
              <Route path='/newstory' component={() => <NewStory user={currentuser} />} />
              <Route path='/quotes' component={Quotes} />
              <Route path='/videos' component={Videos} />
              <Route path='/characters' component={Characters} />
              <Route path='/user' component={() => <User user={currentuser} />} />
              <Route path='/' component={Home} />
          </Switch>
        </div>
        <Redirect to='/' />
      </Router>
    </div>
  );
}

export default App;
