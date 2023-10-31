const errDiv = document.getElementById("err");
const loadWrapper = document.getElementById("loadWrapper");
const emptyWrapper = document.getElementById("emptyWrapper");

const signIn = (email, password) => {
    firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
            firebaseApp
            .database()
            .ref(`users/${res.user.uid}`)
            .on("value", data => {
                let user = data.val()
                user && localStorage.setItem("abcUser", JSON.stringify(user))
            })

            if(errDiv) {
                errDiv.innerHTML = ""
            }
        })
        .catch(err => {
            console.warn(err.message)
            if(errDiv) {
                errDiv.innerHTML = err.message
            }
        })
};

const signUp = (email, password, name) => {
    firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                firebaseApp
                .database()
                .ref(`user/${res.user.uid}`)
                .set({
                    email,
                    name,
                    id: res.user.uid
                })
                .then(() => {
                    firebaseApp
                    .database()
                    .ref(`user/${res.user.uid}`)
                    .on("value", data => {
                        let user = {...data.val(), id: res.user.uid}
                        user && localStorage.setItem("abcUser", JSON.stringify(user))
                    })
                })
                .catch(err => {
                    console.warn(err)
                })
            })

    })
}