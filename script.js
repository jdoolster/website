let presses = 0;
const message = document.getElementById("alert");
const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
async function button_press() {
    const button = document.getElementById("button");
    
    const catflower = document.getElementById("catflower");
    const putCheckboxes = document.getElementById("putCheckboxes");
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");
    const replyButton = document.getElementById("replyButton");
    const label1 = document.getElementById("label1");
    const label2 = document.getElementById("label2");
     
    button.src = "assets/button-clicked.png";
    await sleep(100);
    button.src = "assets/button.png";
    presses += 1;
    if (presses == 1) {
        message.textContent = "Failed. Press Again";
    } else if (presses == 2) {
        message.textContent = "Didn't work again. Press it again";
    } else if (presses == 3) {
        message.textContent = "Still not working. Press it another time";
    } else if (presses == 4) {
        message.textContent = "Ugh. Press it again";
    }   else if (presses == 5) {   
        message.textContent = "1 more time I think.";
    } else if (presses == 6) {
        catflower.style.visibility = "visible";
        message.textContent = "Will You Be My Valentine?";
        button.style.visibility = "hidden";

        yesButton.style.visibility = "visible";
        noButton.style.visibility = "visible";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let buttonWidth = '30px';
let buttonHeight = '10px';
let yesPresses = 0;
function yesButtonPress() {
    if (yesPresses >=6) {
        message.textContent = "YUHHHHHHHH\nHAPPY VALENTINES DAY\nI LOVE YOUUU";
        yesButton.style.visibility = "hidden";
        noButton.style.visibility = "hidden";
        return;
    } else {
        if (yesPresses == 0) {
            message.textContent = "Are You Sure?";
        } else if (yesPresses == 1) {
            message.textContent = "Are You Really Sure?";
        } else if (yesPresses == 2) {
            message.textContent = "Are You Really Really Sure?";
        } else if (yesPresses == 3) {
            message.textContent = "Are You Really Really Really Sure?";
        } else if (yesPresses == 4) {
            message.textContent = "Are You Really Really Really Really Sure?";
        } else if (yesPresses == 5) {
            message.textContent = "Are You Really Really Really Really Really Sure?";
        }
        
        width = buttonWidth.split("p")[0];

        newWidth = parseInt(width) + 20 + "px";
        buttonWidth = newWidth;
        height = buttonHeight.split("p")[0];       
        newHeight = parseInt(height) + 20 + "px";
        buttonHeight = newHeight;
        yesButton.style.width = buttonWidth;
        yesButton.style.height = buttonHeight;
        yesPresses += 1;
    }
}

function noButtonPress() {
    alert("No");
}