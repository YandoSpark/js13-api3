var btn = document.querySelector("#btn").addEventListener("click", function () {
    var input = document.querySelector("#input").value;
  

    fetch("https://hp-api.onrender.com/api/characters")
      .then((Response) => Response.json())
      .then((data) => {
        data.forEach((element) => {
          if (element.name == input) {
            document.querySelector("#img").innerHTML = `<img src="${element.image}">`
            document.querySelector("#name").innerHTML = "Name: " + element.name
            document.querySelector("#spicies").innerHTML = "Species: " + element.species
            document.querySelector("#gender").innerHTML = "Gender: " + element.gender
            document.querySelector("#birth").innerHTML = "Born in: " + element.yearOfBirth
          }
        });
      });
  });