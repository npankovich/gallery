const onLoad = async () => {
    console.log("sdsdsd");
    const url = `https://api.unsplash.com/photos?per_page=15&order_by=popular&client_id=${apiKey}`;

    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();
        console.log(data);
    } else {
        alert("Error: " + response.status);
    }
};

document.addEventListener("DOMContentLoaded", onLoad);
