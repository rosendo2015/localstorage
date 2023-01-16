let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

async function getImage() {
  const response = await fetch("https://source.unsplash.com/random");
  document.querySelector(".image").innerHTML = `
  <img src="${response.url}">
  `;
}
getImage();

document.querySelector("button").onclick = function () {
  getImage();
};

document.querySelector(".image").onclick = function () {
const imageContainer = document.querySelector(".image ")
  const imageSource = document.querySelector(".image img").src;

  const index = favorites.indexOf(imageSource);
  extistsInLocalStorage = index != -1;
  if (extistsInLocalStorage) {

    favorites.splice(index, 1);
    imageContainer.classList.remove('fav')
  }
  else{
    favorites.push(imageSource);
 }
  
  localStorage.setItem("favorites", JSON.stringify(favorites));
  
};
