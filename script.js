function translate() {
    const inputText = document.getElementById('input').value;
    
    // Здесь должен быть код для перевода текста
    
    // Пример: просто меняем раскладку
    const outputText = inputText.split('').map(char => {
        return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    }).join('');
    
    document.getElementById('output').innerText = outputText;
}
