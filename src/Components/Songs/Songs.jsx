import React,{useEffect} from 'react';
import './songs.scss';
import K from '../../assets/k.mp3';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENTID;
const clintSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const _getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token',{
        method: 'POST',
        headers: { 
            "Content-Type":"application/x-www-form-urlencoded", 
            "Authorization": "Basic "+btoa(clientId + ":" + clintSecret) 
            },
        body: 'grant_type=client_credentials'
    }).catch(error => console.log(error))
    
    const data = await result.json();
    return data
}

const _getPlaylist = async (token,playlistId) => {
    const result = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    return data.items[0].track;
}

function Songs() {    
    useEffect(() => {
        const token = _getToken();
        token.then(response => {
            const music = _getPlaylist(response.access_token,'2MYb8J18ZFpyw2vm0OdbDH')
            music.then(response => console.log(response))
        })
    }, [])

    return (
        <div className='songs'>
            <h2>Songs</h2>
            <audio controls >
                <source src={K} type='audio/mpeg' />
            </audio>
        </div>
    )
}

export default Songs
