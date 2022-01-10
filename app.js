const bdPalForm = document.querySelector('#form-is-bd-pal');
const bdPalDisp = document.querySelector('#bd-disp');

const birthdateEle = document.querySelector('#date-bd');


const isPal = s => {
    for(let i=0; i<(s.length / 2); i++) {
        if(s[i] !== s[s.length -(i+1)]) {
            return false
        }
    }
    return true
}

const bdPalOnSubmitHandler = e => {
    e.preventDefault();

    birthdate = birthdateEle.value.split("-");
    birthdateStr = birthdate[2] + birthdate[1] + birthdate[0];

    if(isPal(birthdateStr)) {
        bdPalDisp.innerHTML = "Yay! Your birthday is palindrome!";
    }
    else {
        bdPalDisp.innerHTML = "Nope! Your birthday is not palindrome!";
    }
}


bdPalForm.addEventListener('submit', bdPalOnSubmitHandler);

