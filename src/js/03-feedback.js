import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
console.log(form);
const LOCALSTORAGE_KEY = "feedback-form-state";
let data = {};

form.addEventListener('input', throttle(onInputDataSave, 500));
form.addEventListener('submit', onFormSubmit);

function onInputDataSave(e) {
    data[e.target.name] = e.target.value;
    const storageDate = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({...storageDate,...data}));
};

function onFormSubmit (e) {
    e.preventDefault(); 
    e.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.removeItem(LOCALSTORAGE_KEY);
    data = {};
};
function savedDataOutput () {
    const savedDataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
if(savedDataForm?.email){
    form.email.value = savedDataForm.email; 
}
if(savedDataForm?.message){
    form.message.value = savedDataForm.message;
}
};
savedDataOutput();