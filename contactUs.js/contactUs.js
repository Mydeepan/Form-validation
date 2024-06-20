const from = document.querySelector('form');
const Fname= document.querySelector('#name');
const lname= document.querySelector('#lname');
const email= document.querySelector('#emailA');
const Agree= document.querySelector('#threeCheck');
const btn = document.querySelector("button")
const radioButton = document.querySelector('.checkboxs');

from.addEventListener("submit",(e)=>{
    e.preventDefault();
    const firstName = Fname.value;
    const LastName = lname.value;
    const emailId = email.value;
    
    if(firstName === '' || firstName === null){
       setError(Fname,"invalue Enter the FirstName")
    }else{
        setSucces(Fname)
    }

    if(LastName === '' || LastName === null){
        setError(lname,'invalue Enter the LastName')
    }else{
        setSucces(lname)
    }

    if(emailId == "" || emailId == null){
        setError(email,"Enter the email Address")
    }else if(!validateEmail(emailId)){
        setError(email,"Enter the correct format")
    }
    else{
        setSucces(email)
    }
})

function setError(input,msg){
    const ParentEl = input.parentElement;
    const errorMsg = ParentEl.querySelector('.error');

     const styleError =` margin:6px; font-size:12px;
     color:red; font-weight:500; font-style:italic`;


     errorMsg.style.cssText=styleError;
    errorMsg.innerHTML =msg;
}
function setSucces(input,msg){
    const Parent=input.parentElement;
    const SuccessMsg = Parent.querySelector('.error');
    SuccessMsg.textContent="";
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
