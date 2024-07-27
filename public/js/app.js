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
        return!/[&\/\\#,+()$~%.'":*?<>{}]/.test(fullName);
    }
    validateEmail(email){
    return!/\s/.test(email);
    }

}

let account = new bank();
while (true) {
    let choice = prompt("choose an option:sign up || log in || change Password || exit ");
    choice = choice.toLowerCase()
    if (choice === "exit") {
        console.log("bye");
        break;
    } else if (choice === "sign up") {
        let fullName = prompt("enter your full name:").trim()
        fullName = fullName.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
        let email = prompt("enter your email:").trim()
        
        let age = prompt("enter your age:")
        let password = prompt("enter your password:")
        if (!account.validateName(fullName)) {
            console.log("invalid name");
            continue
        }
        if (!account.validateSpecial(fullName)) {
            console.log("special character or number detected");
            continue
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

