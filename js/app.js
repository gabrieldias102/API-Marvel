const nomeDoHeroi = document.getElementById("pesquisa").value; 
const container = document.querySelector('#marvel-row');
const chosenHero = nomeDoHeroi;
let contentHTML = '';

function functionByUser() {
  event.preventDefault();
  const nomeDoHeroi = document.getElementById("pesquisa").value; 
  showHero(nomeDoHeroi)
}

function showHero(chosenHero){
  const urlAPI = `https://gateway.marvel.com/v1/public/characters?name=${chosenHero}&ts=1&apikey=e19ceca6efc686a15dbe4fbc6533d381&hash=30d109de6ccc288ebb3a98896715e30e`;
  fetch(urlAPI)
    .then(res => res.json())
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
                <p class = "hero-comic"> PRIMEIRA APARIÇÃO: </p>
                <p class="comics"> ${hero.comics.items[0].name} <p/>
                <p class = "hero-comic"> SEGUNDA APARIÇÃO: </p>
                <p class="comics"> ${hero.comics.items[1].name} <p/>
              </div>
          </div>`;
      }
      container.innerHTML = contentHTML;
    })
}

const marvel = {
    render(){
    }
  };
  
showHero('thor');
showHero('hulk');
marvel.render();

