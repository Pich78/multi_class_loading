// Function to print "Hello World" in different languages
function printHelloWorld(language, message) {
    const outputElement = document.getElementById('output');
    const paragraph = document.createElement('p');
    paragraph.textContent = `${language}: ${message}`;
    outputElement.appendChild(paragraph);
}