const messages = [
    "bububb yakin?",
    "beneran yakin??",
    "bubub cantik banget tau?",
    "bububb please...",
    "coba pikirkan lagi!",
    "kalau bubub bilang ga bisa bikin aku sedih banget...",
    "aku akan sedih banget...",
    "aku akan sedih nangis banget banget banget..",
    "okk aku akan berhenti...",
    "bercanda wlee, tekan yes please! ❤️"
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
    window.location.href = "yes_page.html";
}