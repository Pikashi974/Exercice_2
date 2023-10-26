const textInput = document.querySelector('#textInput');
const testValue = document.querySelector('#testValue');

testValue.addEventListener('click', () => {
    palindrome(textInput.value)
})

function palindrome(texte) {
    // Le regex ignore tout les caractères alphanumériques et les retire.
    texte = texte.replaceAll(/[^a-zA-Z0-9]+/g, '')
    // Après ça, on les mets en miniscules
    texte = texte.toLowerCase()
    let palindromeTest = true;
    // Pour un palindrome, il est nécessaire de ne regarder qu'une moitié pour la comparer à l'autre moitié.
    for (let index = 0; index < parseInt(texte.length / 2); index++) {
        if (texte[index] !== texte[texte.length - 1 - index]) {
            palindromeTest = false;
        }
    }
    document.querySelector(".card-footer").innerHTML = "Palindrome: " + palindromeTest
}
