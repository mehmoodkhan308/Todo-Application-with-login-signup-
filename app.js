const islogin = () => {

    const email = document.getElementById("email")
    const password = document.getElementById("password")
    // console.log(email.value);
    // console.log(password.value);

    if (!email.value || !password.value) {
        alert("required fields are not filled")
        return
    }

    const getUsers = JSON.parse(localStorage.getItem("users"))
    // console.log(getUsers);

    const findUser = getUsers.find((user) => {
        if (user.email === email.value && user.password === password.value) {
            alert("Successfully login")
            location.href = "./dashboard.html"
            return true

        }

    })
    //   console.log(findUser);

    if (!findUser) {
        alert("invalid email & password")

        email.value = ""
        password.value = ""
        return
    }


    email.value = ""
    password.value = ""



}