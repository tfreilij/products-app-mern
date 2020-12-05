import firebase from '../Config/firebase';


export function signInWithEmailAndPassword(email,password) {
   
    return firebase.auth.signInWithEmailAndPassword(email, password)
}

export function createUserWithEmailAndPassword(email,password) {

    return firebase.auth.createUserWithEmailAndPassword(email, password)
  
}

export function addNewUser(name,surname,email,userId) {
    
    return firebase.db.collection("users").add({
        name: name,
        surname: surname,
        email: email,
        userId: userId
    })
}

