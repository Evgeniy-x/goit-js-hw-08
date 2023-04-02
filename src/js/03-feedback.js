

// const emailFormRef = document.querySelector('.feedback-form input');
// const messageFormRef = document.querySelector('.feedback-form textarea');
const feedbackFormRef = document.querySelector('.feedback-form');

// emailFormRef.addEventListener('input', onEmailInput);
// messageFormRef.addEventListener('input', onTextInput);

feedbackFormRef.addEventListener('input', onTest);
feedbackFormRef.addEventListener('submit', onFormSubmit);

const STOREGE_KEY = "feedback-form-state";
const formDate = {};

startPage()

function onTest(e) {
    formDate[e.target.name] = e.target.value;
    console.log(formDate)
    localStorage.setItem(STOREGE_KEY, JSON.stringify(formDate));
}

function onFormSubmit(e) {
    e.preventDefault()

};

function startPage(e) {
    const savedMessage = localStorage.getItem(STOREGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);
    console.log(parsedMessage);

    for (const key in parsedMessage) {
        feedbackFormRef.elements[key].value = parsedMessage[key];
        formDate[key] = parsedMessage[key];
        console.log(key)
      }
    

        
    
}
