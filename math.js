function checkNumber() {
    const input = document.getElementById('math').value;
    const number = parseFloat(input);

    if(isNaN(number)) {
        document.getElementById('odpowiedź').textContent = "Napisz coś";
        return;
    }
    
    if(Number.isInteger(number)) {
        document.getElementById('odpowiedź').textContent = "To jest liczba całkowita";
    } else {
        const rounded = Math.round(number);
        document.getElementById('odpowiedź').textContent = "To jest liczba dziesiętna. Przybliżono: " + rounded;
    }
}
