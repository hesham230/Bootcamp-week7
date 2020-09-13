function fetchPerson(id){
  const endpoint = 'http://swapi.dev/api/people/'
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  fetch(`${proxy}${endpoint}/${id}`)
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      console.log("data", json)

      if (!json.name){
        return;
      }

      const name = json.name;
      const height = json.height;
      const hair_color = json.hair_color;


      const html = `
        <div class="character">
          <div class="name">
            <a href="${json.url}">${name}</a>
          </div>
          <div class="height">${height}</div>
          <div class="hair-color">${hair_color}</div>
        </div>`
      
      document.querySelector("#characters").insertAdjacentHTML('afterbegin', html)

    })
}

for (var i = 1; i <= 10; i++) {
  fetchPerson(i)
}