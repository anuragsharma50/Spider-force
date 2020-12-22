import React,{useEffect,useState} from 'react';
import './showstory.scss';
import { firestore } from '../../firebase/firebaseConfig'; 

function ShowStory({match}) {

    const { params: { storyId } } = match;
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
        <div className='show-story'>
            {
                stories.filter(story => story.id === storyId
                ).map(filteredStory => (
                    <div key={filteredStory.id} className='story'>
                        <h2>{filteredStory.title}</h2>
                        <div className='story-content'>
                            <div className='newstories-show' dangerouslySetInnerHTML={{__html: filteredStory.data.toString('html')}} />
                            <p className='time'>{filteredStory.time}</p>
                            <h5>-By {filteredStory.author}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default ShowStory
