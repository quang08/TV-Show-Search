const form = document.querySelector("#searchForm")
form.addEventListener('submit',async (event)=>{
        event.preventDefault();
        const searchTerm = form.elements.query.value; //user's search value
        const configs = {params: {q: searchTerm}};
        const response = await axios.get(`http://api.tvmaze.com/search/shows?q=`, configs);
        displayImg(response.data)
        form.elements.query.value = "";//clear the search bar for a new submission
});

const displayImg = (shows)=>{ //expect an array of shows as argument
    for(let i=0;i<shows.length;i++){
        if(shows[i].show.image){//if there is an image
            const newImg = document.createElement("img");
            newImg.src = shows[i].show.image.medium;
            form.append(newImg);
        }
    }
}