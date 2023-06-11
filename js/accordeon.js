const openBtns = document.querySelectorAll('.open-button');

openBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        btn.classList.toggle('open-button_opened');
        event.target.closest('.tab').classList.toggle('tab_opened');
    });
});