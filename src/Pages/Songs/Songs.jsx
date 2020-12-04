import React, { useEffect, useState,useRef } from 'react';
import './songs.scss';
import MusicCard from '../../Components/MusicCard/MusicCard';
import { firestore } from '../../firebase/firebaseConfig';

function Songs() {    

    const [songs, setSongs] = useState([])
    const [play, setPlay] = useState('')

    const audioRef = useRef()

    const playSong = (songName) => {
        if(play !== songName){
            setPlay(songName);
            if(audioRef.current){
                audioRef.current.pause();
                audioRef.current.load();
                audioRef.current.play();
            }
            if(audioRef.current){
                console.log(audioRef)
            }   
        }
    }

    useEffect(() => {
        const unsub = firestore.collection('Songs')
        .onSnapshot(snapshot => {
            let documents = []
            snapshot.forEach(doc => {
                documents.push({...doc.data(),id:doc.id})
            });
            setSongs(documents);
        })
        return () => unsub();
    }, [])

    return (
        <div className='songs'>
            <h2>Songs</h2>
            {
                songs && songs.map(song => (
                    <MusicCard song={song} key={song.id} playSong={playSong} />
                )) 
            }
            
            {
                play && 
                (
                    <audio controls ref={audioRef} controlsList="nodownload">
                        <source src={play} type='audio/mpeg' />
                    </audio>
                )
            }
            
        </div>
    )
}

export default Songs
