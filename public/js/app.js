class bank {
    constructor(){
        this.user = {};
    }
    signUp(fullName, email, password, age){
        this.user[email] = {fullName, password, age}
        console.log("your acount has been created");
    }
    logIn(email,password){
    if (this.user[email] && this.user[email].password == password ) {
        console.log("you are logged in");
    }else{
        console.log("invalid email or password");
    }
    }
    changePassword(email, currentPassword, newPassword){
    if (this.user[email] && this.user[email].password == currentPassword) {
        this.user[email].password = newPassword;
        console.log("password changed successfully");
    }else{
        console.log("invalid email or password");
    }

    }
}


