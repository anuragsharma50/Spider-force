import React,{useEffect, useState} from 'react';
import './stories.scss';
import Plus from '../../assets/images/Icons/plus.png';
import {Link} from 'react-router-dom';
import { firestore } from '../../firebase/firebaseConfig'; 

function Stories() {

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

    console.log(stories)

    return (
        <div className='stories'>
            <h2>Stories</h2>
            <Link to='/newstory'>
                <img src={Plus} alt="plus"/>
            </Link>
            <div className='stories-grid'>
                {stories.map(story => (
                    <div className='stories-grid-item' key={story.id}>
                        <h3>{story.title}</h3>
                        <p>{story.author}</p>
                        <p>{story.time}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stories
