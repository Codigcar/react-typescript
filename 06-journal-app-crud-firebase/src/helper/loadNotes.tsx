import {firebase} from '../firebase/firebase-config';


export const loadNotesBD = (uid:string) => {
    const db = firebase.firestore();
    // try {
    //     const data = await db.collection('games/');
    //     console.log('data: ',data);
        
    // } catch (error) {
    //     console.log('error: ',error);
        
    // }

    // leer
    db.collection('games').get()
        .then((querySnapshot) => {
        console.log('data: ',querySnapshot);   
        })
        .catch((err ) => console.log('err: ',err))  


    // ----

    // db.collection("users").add({
    //     first: "Alan",
    //     middle: "Mathison",
    //     last: "Turing",
    //     born: 1912
    // })
    // .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch((error) => {
    //     console.error("Error adding document: ", error);
    // });

    // console.log('listNotesBD: ',listNotesBD);
    
}