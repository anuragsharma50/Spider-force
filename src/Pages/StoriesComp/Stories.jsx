import React,{useEffect, useState} from 'react';
import './stories.scss';
import Plus from '../../assets/images/Icons/plus.png';
import {Link} from 'react-router-dom';
import { firestore } from '../../firebase/firebaseConfig'; 

function Stories({user}) {

    const [stories, setStories] = useState([])

    useEffect(() => {
        const unsub = firestore.collection('Stories')
        .onSnapshot(snapshot => {
            let documents = []
            snapshot.forEach(doc => {
                documents.push({...doc.data(),id:doc.id})
            });
            setStories(documents);
        })
        return () => unsub();
    }, [])

    return (
        <div className='stories'>
            <h2>Stories</h2>
            {
                user ? <Link to='/newstory'>
                            <img src={Plus} alt="plus"/>
                        </Link>
                :   <Link to='/sign-up'>
                        <img src={Plus} alt="plus"/>
                    </Link>
            }
            
            <div className='stories-grid'>
                {stories.map(story => (
                    <Link to={`/stories/${story.id}`} key={story.id}>
                        <div className='stories-grid-item'>
                            <h3>{story.title}</h3>
                            <p>{story.author}</p>
                            <p>{story.time}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Stories
