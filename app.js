setTimeout(showPopUp, 3000);

function hidePopUp() {
    document.querySelector('.popUpContainer').classList.add('hidden');
}

function showPopUp() {
    document.querySelector('.popUpContainer').classList.remove('hidden');
}   