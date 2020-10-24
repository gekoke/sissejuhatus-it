function fetchCat() {
    const catApi = "https://api.thecatapi.com/v1/images/search"
    
    document.getElementById("fetch-button").innerHTML = "Loading..."
    document.getElementById("catpic").src = "images/200.gif"

    fetch(catApi)
        .then(res => res.json())
        .then(data => {
            catUrl = data[0].url;
            document.getElementById("catpic").src = catUrl;
            document.getElementById("fetch-button").innerHTML = "More cats!"
        })
        .catch(err => {
            document.getElementById("fetch-button").innerHTML = "More cats!"
            document.getElementById("catpic").src = "https://i.pinimg.com/originals/7a/af/0f/7aaf0f1d48f57b7779c0fbcf103c2d0f.jpg"
            alert("Sorry, you couldn't be connected to the cat database :(")
            throw err;
        });
    
}