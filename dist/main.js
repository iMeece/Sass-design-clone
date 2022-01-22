function createTimer(newDiv) {
    setTimeout(() => {
        newDiv.remove();
        messageVisible = false;
    }, 4000);
}

function addMessage() {
    const content = document.getElementById('content');
    const newDiv = document.createElement('div');
    const newTopP = document.createElement('div');
    const newBotP = document.createElement('div');
    newDiv.id = 'message-display';
    newTopP.textContent = 'This is a design copy only.';
    newTopP.classList.add('message-p');
    newBotP.textContent = "Most links won't work.";
    newBotP.classList.add('message-p');
    newDiv.appendChild(newTopP);
    newDiv.appendChild(newBotP);
    content.appendChild(newDiv);
    createTimer(newDiv);
}

function messageSwitch() {
    if (!messageVisible) {
        console.log('hi');
        messageVisible = true;
        addMessage();
    };
}

function createLinkListeners() {
    const deadLinks = document.getElementsByClassName('dead-link');
    for (let i = 0; i < deadLinks.length; i++) {
        deadLinks[i].addEventListener('click', () => messageSwitch())
    }
}

let messageVisible = false;

createLinkListeners();