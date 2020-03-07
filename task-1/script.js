var input = document.getElementById('input-field'),
    answer = document.getElementById('input-answer');


// for UI in Index.html
input.addEventListener('input', function() {
    freqChar(this.value);
});

// Frequent character func
function freqChar(str) {

    let max = 0,
        maxChar = '';

    str.split('').forEach(function (char) {
        if (str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
        }
    });

    // for UI
    displayChar(maxChar, max);
    console.log(maxChar, max);
}

function displayChar(char, quant) {
    answer.innerHTML = `<strong>${char}</strong> was called <strong>${quant} times</strong>`;
}