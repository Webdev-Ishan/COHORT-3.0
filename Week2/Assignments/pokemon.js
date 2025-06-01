function findPokemon() {
  let ele = document.querySelector("input").value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${ele}`)
    .then((res) => res.json())
    .then((data) => {
      let name = data.species.name;
      let type = data.types[0].type.name;

      let div = document.createElement("div");
      div.innerHTML = `<p>${name}<p/>
    <p>${type}<p/>
    `;
      document.querySelector("body").appendChild(div);
    })
    .catch((err) => {
      console.log(err);
    });
}
