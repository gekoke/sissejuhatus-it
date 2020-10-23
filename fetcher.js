function fetchCat() {
    const catApi = "https://api.thecatapi.com/v1/images/search"
    
    document.getElementById("fetch-button").innerHTML = "Loading..."

    fetch(catApi)
        .then(res => res.json())
        .then(data => {
            catUrl = data[0].url;
            document.getElementById("catpic").src = catUrl;
            document.getElementById("fetch-button").innerHTML = "More cats!"
        })
        .catch(err => {
            document.getElementById("fetch-button").innerHTML = "More cats!"
            alert("Sorry, you couldn't be connected to the cat database :(")
            throw err;
        });
    
}