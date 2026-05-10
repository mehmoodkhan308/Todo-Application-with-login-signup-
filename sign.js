// ig get to html 

const isSign = () => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")

  
//   email & password  ko hum obj ma save karwa rha hai 

    const userObj = {
        
        email: email.value,
        password: password.value
    }

    if ( !email.value || !password.value) {
        alert("required fields are not filled")
        return
    }
    
//  get data kar rha hai tak phala 
  const users = localStorage.getItem("users")
// console.log(users);

  if(users===null){
   localStorage.setItem("users",JSON.stringify([userObj]))
   alert("SinUp SuccessFully")
   }else{
    const userData = JSON.parse(users)
    const findEmail = userData.find((user)=>{
           if(user.email===email.value){
            return true
           }
    })
   if(findEmail){
    alert("that email already exist")
    email.value =""
    password.value = ""
    return
 }
    userData.push(userObj)
    localStorage.setItem("users",JSON.stringify(userData));
    alert("SinUp SuccessFully")
 }


  email.value = ""
  password.value = ""
  location.href = "./dashboard.html"






    
  }
  


    // save data on localstroage
    // const userData = localStorage.setItem("userData", JSON.stringify([userObj]))
   














//  const getData = JSON.parse(localStorage.getItem("userData"))
//     console.log(getData);


//   if (!email.value) {
//         alert("required fields are not filled")
//         return
//     }
//     if (!password.value) {
//         alert("required fields are not filled")
//         return
//     }