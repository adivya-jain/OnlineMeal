// alert("Hello world")
function showAll() {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.style.display = "block";
    });
  }

  function showBurgers() {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      if (card.classList.contains("burger")) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function showFries() {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      if (card.classList.contains("fries")) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function showPizza() {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      if (card.classList.contains("pizza")) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function showShakes() {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      if (card.classList.contains("shake")) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }