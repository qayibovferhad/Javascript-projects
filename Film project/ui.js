class UI{
    static addFilmtoUI = function(newFilm){
        const filmList = document.querySelector("#films")
        filmList.innerHTML += `
        <tr>
         <td><img src=${newFilm.url}  class="img-fluid img-thumbnail"></td>
         <td>${newFilm.title}</td>
         <td>${newFilm.director}</td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
          </tr> `
    }
    static clearAllInputs = function(element1,element2,element3){
       element1.value = ""
       element2.value = ""
       element3.value = ""
    }
    static deleteFilmfromUI = function(element){
        element.parentElement.parentElement.remove()
    }
    static clearAllfilmsfromUI = function(){
        const filmList = document.querySelector("#films");
        while(filmList.firstChild !== null){
            filmList.firstChild.remove()
        }

    }
    static displayMessages = function(message,type){
        const cardbody = document.querySelectorAll(".card-body")[0]
        const div = document.createElement("div");
        div.textContent = message
        div.className = `alert alert-${type}`;
        cardbody.appendChild(div)

        setTimeout(function(){
            div.remove();
        },1000)
    }
    static loadedAllFilms = function(films){
        const filmList = document.querySelector("#films")
        films.forEach(function(film){
           filmList.innerHTML += `
           <tr>
         <td><img src=${film.url}  class="img-fluid img-thumbnail"></td>
         <td>${film.title}</td>
         <td>${film.director}</td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
          </tr>`
        }) 

    }
}