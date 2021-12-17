const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};


const form = document.body.querySelector(".request-form");
const lastNameInput = form.querySelector(".form__last-name");
const firstNameInput = form.querySelector(".form__first-name");
const patronymicInput = form.querySelector(".form__patronymic")
const emailInput = form.querySelector(".form__email");
const phoneInput = form.querySelector(".form__phone");
const messageInput = form.querySelector(".form__text");
const linkSubmit = form.querySelector("input[type='submit']");
const modalError = document.body.querySelector(".form-error");
const modalSuccess = document.body.querySelector(".modal__success");
const closeModalError = document.body.querySelector(".modal-close");
const closeModalSuccess = document.body.querySelector(".modal__button");
const inputsForm = form.querySelectorAll("input");
const requiredFields=form.querySelectorAll("input[required]");


let isStorageSupport = true;
let firstName = "";
let lustName = "";
let patronymic = "";
let mail = "";
let phone = "";


try {
  firstName = localStorage.getItem("nameUser");
  lustName = localStorage.getItem("lustNameUser");
  patronymic =localStorage.getItem("patronymicUser")
  phone = localStorage.getItem("phoneUser");
  mail = localStorage.getItem("emailUser");
} catch (err) {
  isStorageSupport = false;
}

function submitForm(){
  form.reset();
  linkSubmit.disabled=true;
  return false;
}


function enableButton () {
   let canSubmit = true;


    if(firstNameInput.value==0 || lastNameInput.value==0 || emailInput.value==0) {
      canSubmit = false;
      linkSubmit.classList.remove("form__btn-submit");
      linkSubmit.classList.add("form__btn-disabled")
    }else {
      linkSubmit.classList.remove("form__btn-disabled");
      linkSubmit.classList.add("form__btn-submit");

    }
  linkSubmit.disabled = !canSubmit;
}
window.onload = enableButton;


/*for(let i = 0;i <= requiredFields.length;i++) {
  inputsForm[i].addEventListener("input",(e)=> {
    if(e.target.value!=="") {
      linkSubmit.classList.remove("form__btn-disabled");
      linkSubmit.classList.add("form__btn-submit");

    }else {
      linkSubmit.classList.remove("form__btn-submit");
      linkSubmit.classList.add("form__btn-disabled")
    }
  })
}*/


form.addEventListener("submit",(e)=> {

  if(!emailInput.value || !firstNameInput.value || !lastNameInput.value) {
    e.preventDefault();

  } else  {
    if(isStorageSupport) {
      localStorage.setItem("nameUser", firstNameInput.value);
      localStorage.setItem("surnameUser", lastNameInput.value);
      localStorage.setItem("patronymicUser", patronymicInput.value);
      localStorage.setItem("phoneUser", phoneInput.value);
      localStorage.setItem("emailUser", emailInput.value);
    }
  }
});



linkSubmit.addEventListener("click", ()=>{
  if(!emailInput.value || !firstNameInput.value || !lastNameInput.value) {
    modalError.style.display = "block";
  } else {
    modalSuccess.classList.add("page__modal-show");
  }
});

closeModalError.addEventListener("click",(e) => {
  e.preventDefault();
  modalError.style.display = "none";
});

closeModalSuccess.addEventListener("click",(e) => {
  e.preventDefault();
  modalSuccess.classList.remove("page__modal-show");
  linkSubmit.classList.remove("form__btn-submit");
  linkSubmit.classList.add("form__btn-disabled")
})

window.addEventListener("keydown",(e)=>{
  if(e.keyCode===27) {
    e.preventDefault()
    if(modalSuccess.classList.contains("page__modal-show")) {
      modalSuccess.classList.remove("page__modal-show");
    } else if(modalError.style.display==="block") {
      modalError.style.display = "none"
    }
  }
})
