const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function(){
  return this.films.map(film => film.title)

}

Cinema.prototype.findFilmByTitle = function(title){
  return this.films.filter(film =>film.title === title)

}

Cinema.prototype.findFilmByGenre = function(genre){
  return this.films.filter(film => film.genre === genre)
  // return this.films.find(film => film.genre === genre)
}

Cinema.prototype.checkYear = function(year){
    return this.films.some( film => film.year === year)
}

Cinema.prototype.checkLength = function(length){
  return this.films.every(film => film.length > length)
}

Cinema.prototype.totalRunningTime = function(){

  return this.films.reduce((total,film) => total += film.length,0)

}

module.exports = Cinema;
