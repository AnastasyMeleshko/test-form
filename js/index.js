let btnPass = document.querySelector('.password__input__eye-image');
let inputPass = document.getElementById('password__input');

btnPass.onclick = function () {
    if (inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type', 'text');
        btnPass.classList.add('active');
    } else {
        inputPass.setAttribute('type', 'password');
        btnPass.classList.remove('active');
    }
}

function validateForm() {
    let email = document.getElementById('first__input');
    let mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
    let password = document.getElementById('password__input');
    let passwordRe = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (email.value === "") {
        alert( "  Please enter your Email or Phone Number  ");
    }
    else if (!mailFormat.test(email.value)) {
        alert( "  Email Address / Phone number is not valid, Please provide a valid Email or phone number ");
        return false;
    }
    else if (!passwordRe.test(password.value)) {
        alert("Password should contain at least six characters, including one number, one lowercase and one uppercase letter");
        return false;
    }
    else {
        alert(" Success ");
    }
}


let SubmitBtn = document.querySelector(".form__button");
SubmitBtn.onclick = function(e) {
    e.preventDefault();
    validateForm();
}
