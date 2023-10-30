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