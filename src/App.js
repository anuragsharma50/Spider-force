import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Songs from './Components/Songs/Songs';
import Navbar from './Components/Navbar/Navbar';
import User from './Pages/User/User';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';

import { auth,createUser } from './firebase/firebaseConfig';
import Quotes from './Components/Quotes/Quotes';

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
              <Route path='/sign-up' component={SignUp} />
              <Route path='/sign-in' component={SignIn} />
              <Route path='/songs' component={Songs} />
              <Route path='/quotes' component={Quotes} />
              <Route path='/user' component={() => <User user={currentuser} />} />
          </Switch>
        </div>
        {/* <Redirect to='/' /> */}
      </Router>
    </div>
  );
}

export default App;
