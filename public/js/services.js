(function () {
  angular.module('pokedex.services', [])

  .factory('PokemonService', ['$http','$q', '$filter', function ($http, $q, $filter) {
    let normalize = $filter('normalize')

    /*Este metodo trae todos los pokemon y nos devuelve una promesa*/
    function all () {
      let deferred = $q.defer()
      $http.get('./pokemons.json')
        .then(function(response) {
          deferred.resolve(response.data)
        })
      return deferred.promise  
    }

    /*este metodo hace un filtor entre todos los pokemon
    devuelve una promesa con el pokemon que concuerde con 
    la condicion*/
    function byName (name) {
      name = normalize(name)
      let deferred = $q.defer()
      all()
        .then(function (response) {
          let results = response.filter(function(pokemon) {
            return normalize(pokemon.name) === name
          })
          if (results.length > 0) {
            deferred.resolve(results[0])
          }
          else {
            deferred.reject()
          }
        })
        return deferred.promise
    }

    /*Este metodo recibe un typo, va a obtener todos los pokemon, por cada uno
    hace una iteracion en su arreglo de type y devuelve los pokemon 
    con el type igual al type que le pasamos al metodo*/
    function byType (type) {
      type = normalize(type)
      let deferred = $q.defer()
      all()
        .then(function (response) {
          let results = response.filter(function (pokemon) {
            return pokemon.type.some(function (t) {
              return normalize(t) === type
            })            
          })
          deferred.resolve(results)
        })

        return deferred.promise
    }

    return  {
      all: all,
      byName: byName,
      byType: byType
    }
  }])
})()