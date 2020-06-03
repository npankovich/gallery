const queryString = window.location.search;
const imageId = queryString.substring(1, queryString.length);
let imageWrapper = document.getElementsByClassName("largeImage")[0];
let indicator = document.getElementsByClassName("loadingIndicator")[0];

if (localStorage.getItem("images")) {
    const images = JSON.parse(localStorage.getItem("images"));
    const thisImage = images.filter((el) => el.id === imageId)[0];

    if (thisImage) {
        indicator.parentNode.removeChild(indicator);
        imageWrapper.innerHTML = `<img  src=${thisImage.urls.full}/>`;
    } else {
        imageWrapper.innerHTML = `<h1>Something is wrong<h1/>`;
    }
}
