import { useState,useEffect } from 'react';
import { storage,firestore } from '../firebase/firebaseConfig';

function useStorage(file,id,photoURL) {

    const [photoUrl, setPhotoUrl] = useState('')

    const [url, seturl] = useState('')

    useEffect(() => {
        if(file){
            setPhotoUrl(photoURL);
            const storageRef = storage.ref(file.name);
            const docRef = firestore.doc(`users/${id}`);

            storageRef.put(file).on('state_changed',(snap) => {
                console.log(snap);
            },(err) => {
                console.log(err)
            },async () => {
                const url = await storageRef.getDownloadURL();
                docRef.update({photoURL:url})
                seturl(url);
            });
        }

        console.log(photoURL)
        
        if(photoUrl){
            const photoRef = storage.refFromURL(photoUrl);
            photoRef.delete().then(() => {
                console.log('deleted Successfully')
            }).catch(error => {
                console.log(error)
            })
        }
    }, [file,id,photoUrl])
    return { url }
}

export default useStorage
