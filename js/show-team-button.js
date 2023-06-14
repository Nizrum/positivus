const personCards = document.querySelectorAll(".person");
const teamButton = document.querySelector(".team__button");

const openTeam = () => {
    teamButton.textContent = "Show less people";
    personCards.forEach((card) => card.classList.remove("person_hidden"));
    teamButton.removeEventListener("click", openTeam);
    teamButton.addEventListener("click", closeTeam);
};

const closeTeam = () => {
    teamButton.textContent = "See all team";
    personCards.forEach((card) => card.classList.add("person_hidden"));
    [...personCards].slice(0, 6).forEach((card) => card.classList.remove("person_hidden"));
    teamButton.removeEventListener("click", closeTeam);
    teamButton.addEventListener("click", openTeam);
};

teamButton.addEventListener("click", openTeam);
