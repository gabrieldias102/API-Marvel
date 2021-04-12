const chosenHero = document.getElementById("pesquisa").value;
const container = document.querySelector("#marvel-row");
let contentHTML = "";

function heroByUser() {
  event.preventDefault();
  const chosenHero = document.getElementById("pesquisa").value;
  showHero(chosenHero);
  clearFields("pesquisa");
}

function clearFields(textBox) {
  document.getElementById(textBox).value = "";
}

//não sei qq eu fiz mas deu certo

function showHero(chosenHero) {
  const urlAPI = `https://gateway.marvel.com/v1/public/characters?name=${chosenHero}&ts=1&apikey=e19ceca6efc686a15dbe4fbc6533d381&hash=30d109de6ccc288ebb3a98896715e30e`;
  fetch(urlAPI)
    .then((res) => res.json())
    .then((json) => {
      for (const hero of json.data.results) {
        let urlHero = hero.urls[0].url;
        contentHTML += `
          <div class="hero-infos">
              <a href="${urlHero}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
              </a>
              <div class="hero-text">
                <h2 class="hero-title">${hero.name}</h2>
                <p class = "hero-comic"> PRIMEIRO QUADRINHO: </p>
                <p class="comics"> ${hero.comics.items[0].name} <p/>
                <p class = "hero-comic"> SEGUNDO QUADRINHO: </p>
                <p class="comics"> ${hero.comics.items[1].name} <p/>
              </div>
          </div>`;
      }
      container.innerHTML = contentHTML;
    });
}

const marvel = {
  render() {},
};

showHero("thor");
showHero("iron man");
marvel.render();