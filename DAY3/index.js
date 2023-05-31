const data=[
    {
        image : "movie1.jpg",
        title : "Black Panther",
        rating: 5,
    },
    {
        image : "movie1.jpg",
        title : "Black Panther",
        rating: 5,
    },
    {
        image : "movie1.jpg",
        title : "Black Panther",
        rating: 5,
    },
    {
        image : "movie1.jpg",
        title : "Black Panther",
        rating: 5,
    },
    {
        image : "movie1.jpg",
        title : "Black Panther",
        rating: 5,
    },
    {
        image : "movie1.jpg",
        title : "Black Panther",
        rating: 5,
    },
]

const movieBox = document.getElementById("show_movie");

for(let i=0; i<data.length; i++){
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = data[i].image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = data[i].title;
    const rating = document.createElement("p");
    rating.innerText = data[i].rating;
    div.append(image, movieTitle, rating);
    movieBox.append(div);
}

/*data.forEach((el) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = el.image;
    const movieTitle = documnet.createElement("h3");
    movieTitle.innerText = el.title;
    const rating = documnet.createElement("p");
    rating.innerText = el.rating;
    div.append(image, movieTitle, rating);
    movieBox.append(div);
})*/