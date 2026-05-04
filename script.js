
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    let container = document.getElementById("characterContainer");

    if (!container) return;

    data.characters.forEach(char => {
      let div = document.createElement("div");
      div.classList.add("card");

      div.innerHTML = `
        <img src="${char.image}">
        <h3>${char.name}</h3>
        <span class="tag">${char.tag}</span>
        <span class="personallity">${char.personallity}</span>
      `;

      container.appendChild(div);
    });
  });