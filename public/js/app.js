class bank {
    constructor() {
        this.user = {};
    }
    signUp(fullName, email, age, password) {
        this.user[email] = { fullName, age, email, password }
        console.log("your acount has been created");
    }
    logIn(email, password) {
        if (this.user[email] && this.user[email].password == password) {
            console.log("you are logged in");
        } else {
            console.log("invalid email or password");
        }
    }
    changePassword(email, currentPassword, newPassword) {
        if (this.user[email] && this.user[email].password == currentPassword) {
            this.user[email].password = newPassword;
            console.log("password changed successfully");
        } else {
            console.log("invalid email or password");
        }
    }
    validateName(fullName) {
        return fullName.length >= 5;
    }
    validateSpecial(fullName){
        return /[&\/\\#,+()$~%.'":*?<>{}]/.test(fullName)}
    validateEmail(email){
    return!/\s/.test(email);
    }
    validateEmailLength(email){
        return email.length >= 10;
    }
    atTheRateSign(email){
        return email.match(/@/g).length === 1;
    }
    onlyNumbers(age){
        return typeof age ==="number";
    }
    zeroOrThree(age){
        return String(age).length <= 2
    }
    validatepassword(password){
        return!/\s/.test(password);
    }
    PasswordSpecial(password){
        const specialpassword = ["@" , "#" , "-" , "+" , "*" , "/"]
        return specialpassword.some(char => String(password).includes(char))
    }
    passwordLength(password){
        return password.length >= 7;
    }
    passwordcheck(password){
        
    }
}
let account = new bank();
while (true) {
    let choice = prompt("choose an option:sign up || log in || change Password || exit");
    choice = choice.toLowerCase()
    if (choice === "exit") {
        console.log("bye");
        break;
    } else if (choice === "sign up") {
        let fullName = prompt("enter your full name:").trim()
        fullName = fullName.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
        let email = prompt("enter your email:").trim()

        let age = parseInt(prompt("enter your age:").trim())
        let password = prompt("enter your password:").trim()
        // if (!account.validateName(fullName)) {
        //     console.log("invalid name");
        //     break
        // }
        // if (!account.validateSpecial(fullName)) {
        //     console.log("special character or number detected");
        //     break
        // }
        // if (!account.validateEmail(email)) {
        //     console.log("email is invalid becuse of space in the middle");
        //     break;
        //     }
        // if (!account.validateEmailLength(email)) {
        //     console.log("email has less than 10 charcaters");
        //     break;
        // }
        // if(!account.atTheRateSign(email)){
        //     console.log("email has more than one @");
        //     continue
        // }
        // if(!account.onlyNumbers(age)){
        //     console.log("invalid age");
        //     continue
        // }
        // if (!account.zeroOrThree(age)) {
        //     console.log("age has 0 characters or it has 3 or more characters");
        //     break
        // }
        if (!account.validatepassword(password)) {
            console.log("password is invalid becuse of space in the middle");
            break;
        }
        if (!account.PasswordSpecial(password)) {
            console.log("password dose not contain at least one special character");
        }
        if (!account.passwordLength(password)) {
            console.log("password has less than 7");
        }
        account.signUp(fullName, email, age, password);
    } else if (choice === "log in") {
        let email = prompt("enter your email:")
        let password = prompt("enter your password:")
        
        account.logIn(email, password)
    } else if (choice === "change password") {
        let email = prompt("enter your email:")
        let currentPassword = prompt("enter your current password:")
        let newPassword = prompt("enter your new password:")
        account.changePassword(email, password, currentPassword, newPassword);
        break;
    } else {
        console.log("your choice was invalid try again");
    }
}
console.log(account.user);

