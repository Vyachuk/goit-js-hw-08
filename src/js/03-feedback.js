import storage from './storage'
const throttle = require('lodash.throttle');

const ref = {
    form: document.querySelector('.feedback-form'),
}
const storageFormInfo = storage.load("feedback-form-state");
if(storageFormInfo) {
    ref.form.elements.email.value = storageFormInfo.email;
    ref.form.elements.message.value = storageFormInfo.message;
}

ref.form.addEventListener('input', throttle(e => {
    const formInfo = {
        email: ref.form.elements.email.value,
        message: ref.form.elements.message.value
    }
    storage.save("feedback-form-state", formInfo)
},500))

ref.form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(`Email: ${ref.form.elements.email.value}`);
    console.log(`Message: ${ref.form.elements.message.value}`);
    ref.form.reset();
    storage.remove("feedback-form-state");
})
