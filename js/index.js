const onLoad = async () => {
    const url = `https://api.unsplash.com/photos?per_page=32&order_by=latest&client_id=${apiKey}&h=200&w=200`;
    let indicator = document.getElementsByClassName("loadingIndicator")[0];
    let imagesWrapper = document.getElementsByClassName("imagesWrapper")[0];

    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();
        if (data && data.length > 0) {
            indicator.parentNode.removeChild(indicator);
            data = data.map((el) =>
                Object.assign(
                    {},
                    { id: el.id },
                    { urls: el.urls },
                    { description: el.description },
                    { user: el.user.name }
                )
            );
            localStorage.setItem("images", JSON.stringify(data));

            let images = data.map((el) => {
                return `
                <a class="imageLink" href='./pages/image.html?${el.id}'">
                    <img src="${el.urls.thumb}"/>
                    <span class="userName"> Autor: ${el.user}</span>
                    <span class="description">${el.description}<span/>
                <a/>`;
            });

            imagesWrapper.innerHTML = images;
        }
    } else {
        console.error("Error: " + response.status);
        imagesWrapper.innerHTML = `<h1>${response.status}<h1/>`;
    }
};

const unload = () => {
    localStorage.clear();
};

document.addEventListener("DOMContentLoaded", onLoad);
document.addEventListener("unload", unload);
