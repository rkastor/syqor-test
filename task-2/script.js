var input     = document.getElementById('input-field'),
    form      = document.getElementById('form'),
    setForm   = document.getElementById('set'),
    clearForm = document.getElementById('clear'),
    submitBtn    = document.querySelectorAll('input[type="submit"]'),
    storage   = localStorage.getItem('num23');


function validInput(elem) {
    if ((elem.value).length == 0) {
        submitBtn.forEach((item)=> {
            item.setAttribute("disabled", "disabled");
        })
    } else {
        submitBtn.forEach((item)=> {
            item.removeAttribute("disabled", "disabled");
        })
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
        
        let parag = document.querySelectorAll('.input-answer');
        
        parag.forEach((item)=> {
            item.remove();
        })

        console.log('Local storage is clear');
    }
});


// submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
})


// displaying of paragraph
function displayChar(value) {

    if (typeof value !== 'undefined' && value !== null) {

        var answer = document.createElement("p");
        answer.setAttribute("class", "input-answer");

        form.after(answer);
        answer.innerHTML = `<strong>${value}</strong>`;

        console.log(value);
    }
}

displayChar(storage);