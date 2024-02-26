import fetchBreeds from "./cat-api";
let catIdElement = document.querySelector(".breed-select");
let catNameElement = document.getElementsByClassName('cat-info');

console.log(catIdElement)
console.log(catNameElement);
fetchBreeds()
    .then(function (response) {
        // handle success
        console.log(response.data);
        let newOption = document.createElement("option");
        response.data.forEach((element) => {
            console.log(element.name)
            newOption.value = element.id;
            newOption.innerText = element.name;
            return catIdElement.insertAdjacentElement('beforeend', newOption);
           /*  console.log('dziala',newOption); */
        })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });


