document.getElementById("lotCalculator").addEventListener("submit", function(e) {
    e.preventDefault();

    // Pobierz wartości z formularza
    let balance = parseFloat(document.getElementById("balance").value);
    let risk = parseFloat(document.getElementById("risk").value);
    let stopLoss = parseFloat(document.getElementById("stopLoss").value);
    let pipValue = parseFloat(document.getElementById("pipValue").value);

    // Oblicz wielkość lota
    let riskAmount = (balance * (risk / 100));
    let lotSize = riskAmount / (stopLoss * pipValue);

    // Wyświetl wynik
    document.getElementById("lotSize").textContent = lotSize.toFixed(2);
});
