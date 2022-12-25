class Storage{
    static getFilmfromStorage = function(){
       let films;
       if(localStorage.getItem("films") === null){
        films = []
    }
      else{
         films = JSON.parse(localStorage.getItem("films"));
       }
       return films
    }
    static addFilmtoStorage = function(newfilm){
        let films = this.getFilmfromStorage();
        films.push(newfilm);
        localStorage.setItem("films",JSON.stringify(films)) 
    }
     static deleteFilmfromStorage = function(filmTitle){
        let films = this.getFilmfromStorage();
        films.forEach(function(film,index){
         if(film.title === filmTitle){
            films.splice(index,1)
         }
        })
        localStorage.setItem("films",JSON.stringify(films))
     }
     static clearAllfilmsfromStorage= function(){
        localStorage.removeItem("films")
     }
     
}