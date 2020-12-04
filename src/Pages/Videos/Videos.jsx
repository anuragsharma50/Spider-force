import React,{useEffect,useState,useRef} from 'react';
import './videos.scss';
import {firestore} from '../../firebase/firebaseConfig';
import ReactPlayer from 'react-player/youtube';

function Videos() {

    const [videos, setVideos] = useState([])
    const [playingVideo, setPlayingVideo] = useState('')

    const playerRef = useRef();

    useEffect(() => {
        const unsub = firestore.collection('Videos')
        .onSnapshot(snapshot => {
            let documents = []
            snapshot.forEach(doc => {
                documents.push({...doc.data(),id:doc.id})
            });
            setVideos(documents);
        })
        return () => unsub();
    }, [])

    const playVideo = (url) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        setPlayingVideo(url);
    }

    return (
        <div className='videos' >
            <h2>Videos</h2>
            <h3>Trailers</h3>
            {
                playingVideo && (
                    <ReactPlayer 
                    className='video-player'
                    width='97%'
                    height='40vw'
                    controls url={playingVideo}
                    playsinline 
                    />
                )
            }
            <div className='images' ref={playerRef}>
                {
                    videos && videos.map(video => (
                        <div className='image-detail' key={video.id} onClick={() => playVideo(video.url)}>
                            <img src={video.Thumbnail} alt={video.Name}/>
                            <h4>{video.Name}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Videos
