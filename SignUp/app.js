import { createUserWithEmailAndPassword, auth } from "../Utils/FireBase.js";

const signUpBtn = document.querySelector("#signupBtn")


signUpBtn.addEventListener("click", async (e) => {

  e.preventDefault()
  const firstName = document.querySelector("#firstName").value
  const lastName = document.querySelector("#lastName").value
  const userName = document.querySelector("#userName").value
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value
  const cPassword = document.querySelector("#cPassword").value
  console.log("chal raha h")

  if (!firstName ||
    !lastName ||
    !userName ||
    !email ||
    !password ||
    !cPassword) {
    return alert("Please fill all the fields")
  }

  if (password !== cPassword)
    return alert("Password Should Not Match")

  // if(password.length < 8 )
  //   return alert("Atleast 08 Charatcers required")
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    console.log(response);
    window.location.href = "../SignIn/Index.html"

  } catch (error) {
    console.log(error);
  }
}
)
