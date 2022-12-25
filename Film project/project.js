//Element secme
const form = document.querySelector("#film-form");
const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films")
//EventListeners
function EventListeners(){
    form.addEventListener("submit",addFilm);
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllfilms)
    document.addEventListener("DOMContentLoaded",()=>{
        let films = Storage.getFilmfromStorage()
        UI.loadedAllFilms(films)
    })
}
EventListeners();
//Add Film
function addFilm(e){
    const title = titleInput.value
    const director = directorInput.value
    const url = urlInput.value
    if(title === "" || director === "" || url === ""){
     UI.displayMessages("Please fill the boxes","danger")
    }
    else{
        const newFilm = new Film(title,director,url)
        UI.addFilmtoUI(newFilm);
        Storage.addFilmtoStorage(newFilm)
        UI.displayMessages("Film added successfully","success");
    }

    UI.clearAllInputs(titleInput,directorInput,urlInput)
    e.preventDefault()
}
//Delete Film
function deleteFilm(e){
  if(e.target.id === "delete-film"){
    UI.deleteFilmfromUI(e.target)
    UI.displayMessages("Film removed succesfully","success")
    Storage.deleteFilmfromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
  }
}
//Clear Films
function clearAllfilms(){
   UI.clearAllfilmsfromUI();
   if(confirm("Are you sure?")){
    Storage.clearAllfilmsfromStorage()
   }
   UI.displayMessages("All film removed succesfully","success")

}