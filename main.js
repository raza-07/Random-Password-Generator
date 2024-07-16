let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let buttonEl = document.getElementById("button-el");
let resultEl = document.getElementById("result-el");

function generateP() {
    let genPasswordone = [];

    for (let i = 0; i < 16; i++) {
        let getRandom = Math.floor(Math.random() * characters.length);
        let randomCharacter = characters[getRandom]; 
        genPasswordone.push(randomCharacter);
    }
    // buttonEl.textContent = generateP()
    // console.log(genPassword.join('')); 
    firstGenp = genPasswordone.join('')


    let genPasswordtwo = [];

    for (let i = 0; i < 16; i++) {
        let getRandom = Math.floor(Math.random() * characters.length);
        let randomCharacter = characters[getRandom]; 
        genPasswordtwo.push(randomCharacter);
    }

    secGenP = genPasswordtwo.join('')
    resultEl.textContent = "Select : " + " " + "- " + firstGenp +  " " + "    &   "  + secGenP
}



resultEl.addEventListener(generateP)