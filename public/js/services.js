(function () {
  angular.module('pokedex.services', [])

  .factory('PokemonService', ['$http','$q', function ($http, $q) {
    function all () {
      let deferred = $q.defer()
      $http.get('./pokemons.json')
        .then(function(response) {
          deferred.resolve(response.data)
        })
      return deferred.promise  
    }

    return  {
      all: all
    }
  }])
})()