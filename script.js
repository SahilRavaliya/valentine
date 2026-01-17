const messages = [
    "Are you sure?",
    "Really sure??",
    "pakka beautiful?",
    "beautiful please...",
    "Just think about it!",
    "Don’t say no, I’d be pretty sad.",
    "I’d be really sad.",
    "I’d be extremely sad.",
    "Okay, I won’t ask anymore.",
    "Haha, kidding! Please say yes 😉"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    // WhatsApp message configuration
    const phoneNumber = "919173794195";
    const message = "She said YES! ❤️❤️❤️";
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    
    // Also redirect to celebration page
    window.location.href = "yes_page.html";
}
