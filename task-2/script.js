var input     = document.getElementById('input-field'),
    form      = document.getElementById('form'),
    setForm   = document.getElementById('set'),
    clearForm = document.getElementById('clear'),
    storage   = localStorage.getItem('num23');


function validInput(elem) {
    if ((elem.value).length == 0) {
        setForm.setAttribute("disabled", "disabled");
        clearForm.setAttribute("disabled", "disabled");
    } else {
        setForm.removeAttribute("disabled");
        clearForm.removeAttribute("disabled");
    }
}

validInput(input);


input.addEventListener('input', function(e) {
    validInput(this);
});


setForm.addEventListener('click', function() {

    if ((input.value).length !== 0) {
        localStorage.setItem('num23', input.value);
        storage = localStorage.getItem('num23')

        displayChar(storage);
}
});


clearForm.addEventListener('click', function() {

    if ((input.value).length !== 0) {
        input.value = '';
        localStorage.removeItem('num23');
        validInput(input);
        console.log('Local storage is clear');
    }
});


// submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
})


// displaying of paragraph
function displayChar(value) {

    if (typeof value !== 'undefined' && value !== '') {
        var answer = document.getElementById('input-answer');

        if (typeof answer == "null" || typeof answer == "undefined") {
            var answer = document.createElement("p");
            answer.setAttribute("id", "input-answer");

            form.after(answer);
            answer.innerHTML = `<strong>${value}</strong>`;
        } else {
            answer.innerHTML = `<strong>${value}</strong>`;
        }


        console.log(value);
    }
}

displayChar(storage);