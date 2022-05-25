
// HOMETASK

const elHeroForm = document.querySelector(".herobox__form")

const elUserInputNumber = document.querySelector("#herobox__input");

const elUserSubmitBtn = document.querySelector(".herobox__btn");

const elUserResultDesc = document.querySelector(".herobox__desc");

// const enterNumber = elUserInputNumber.value;

// console.log(enterNumber);

elHeroForm.addEventListener('submit', (evt) => {
  evt.preventDefault(0);

  elUserResultDesc.classList.remove("border-danger");

  const enterNumber = elUserInputNumber.value;

  const userNumber = Number(enterNumber);

  console.log(userNumber);

  switch (userNumber) {
    case 1:
    elUserResultDesc.textContent = "Dushanba kunini tanladingiz!";

    elUserResultDesc.classList.toggle("border-success");

    elUserResultDesc.classList.toggle("text-warning");
    break;
    case 2:
    elUserResultDesc.textContent = "Seshanba kunini tanladingiz!";

    elUserResultDesc.classList.toggle("border-success");

    elUserResultDesc.classList.toggle("text-warning");
    break;
    case 3:
    elUserResultDesc.textContent = "Chorshanba kunini tanladingiz!";

    elUserResultDesc.classList.toggle("border-success");

    elUserResultDesc.classList.toggle("text-warning");
    break;
    case 4:
    elUserResultDesc.textContent = "Payshanba kunini tanladingiz!";

    elUserResultDesc.classList.toggle("border-success");

    elUserResultDesc.classList.toggle("text-warning");
    break;
    case 5:
    elUserResultDesc.textContent = "Juma kunini tanladingiz!";

    elUserResultDesc.classList.toggle("border-success");

    elUserResultDesc.classList.toggle("text-warning");
    break;
    case 6:
    elUserResultDesc.textContent = "Shanba kunini tanladingiz!";

    elUserResultDesc.classList.toggle("border-success");

    elUserResultDesc.classList.toggle("text-warning");
    break;
    case 7:
    elUserResultDesc.textContent = "Yakshanba kunini tanladingiz!";

    elUserResultDesc.classList.toggle("border-success");

    elUserResultDesc.classList.toggle("text-warning");
    break;

    default:
      elUserResultDesc.textContent = "Sanashni bilasizmi, Brat!";

      elUserResultDesc.classList.toggle("border-danger");
    break;
  }

});