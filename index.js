const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOneBtn = document.getElementById("password1-button")
let passTwoBtn = document.getElementById("password2-button")
let generateBtn = document.getElementById("generator-button")

const copyButtonOne = document.getElementById('password1-button');
const copyButtonTwo = document.getElementById('password2-button');

let passwordLength = 15

/*----- random character is generated ---- */

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}


/*----- random passwords are generated ---- */

function genPassOne() {  
    
    let randomPassword = ''
    
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    passOneBtn.textContent = randomPassword
}

function genPassTwo(){

    let randomPasswordTwo = ''

    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += getRandomCharacter()         
    }
    passTwoBtn.textContent = randomPasswordTwo
}  


/*----- Generated passwords are being displayed in the buttons ---- */

function generatePasswords() { 

        genPassOne()
        genPassTwo()    
}


/*----- Copying passwords from buttons on click ---- */

copyButtonOne.addEventListener('click', () => {
    // getting the text content that we want to copy
    const content = document.getElementById('password1-button').textContent;
    // loading the content into our clipboard
    navigator.clipboard.writeText(content);
})

copyButtonTwo.addEventListener('click', () => {
    
    const content = document.getElementById('password2-button').textContent;
    navigator.clipboard.writeText(content);

})