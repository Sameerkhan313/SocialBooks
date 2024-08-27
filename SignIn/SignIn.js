import {auth,signInWithEmailAndPassword} from "../Utils/FireBase.js";

const signInBtn = document.querySelector("#signInBtn")

signInBtn.addEventListener ("click", async (e)=>{
    e.preventDefault()
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response);
        window.location.href = "../home/index.html"
        
    } catch (error) {
        console.log(error.code);

        
    }
    


// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

})

