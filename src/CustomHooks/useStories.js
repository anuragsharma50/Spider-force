import {firestore} from '../firebase/firebaseConfig';
import { useHistory } from "react-router-dom";

function useStories(id,title,time,value,user) {

    let history = useHistory();

    const publish = async () => {
        console.log(id,title,time,value,user.displayName)
        if(user){
            const storyRef = firestore.doc(`Stories/${id}`)
            const snapShot = await storyRef.get()
            if(!snapShot.exists){
                try {
                  await storyRef.set({
                    author:user.displayName,
                    title,time,data:value
                  })
                  history.push('/stories')
                } catch (error) {
                  console.log('Error creating User',error)
                }
            }
        }
        else{
            console.log(user)
            console.log('User Not Authentic')
        }
    }

    return [publish]
}

export default useStories
