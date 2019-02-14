/*Este arcivo contiene los servicios que usamos para hacer llamados $http
  
  $q =  es una libreria de angularJS para promesas
  $filter = este metodo nos permite usar los filtros que hay en nuestro archivo filters.js
  $window = Este es un servicio envolvente al rededor de la ventana del navegador, aqui lo usamos para 
  utilizar las propiedades de LocalStorage
*/

(function () {
  angular.module('pokedex.services', [])

  .factory('PokemonService', ['$http','$q', '$filter', '$window', function ($http, $q, $filter, $window) {
    let normalize = $filter('normalize')
    let localStorage = $window.localStorage

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

    /*Este metodo busca en el localstorage por los comentarios del pokemon que le pasemos
    si no tiene nada devuelve un array vacio, si  tiene, lo pasa a json y lo devuelve*/
    function getComments (pokemon) {
      let comments = localStorage.getItem(pokemon)
      
      if (!comments) {
        comments = []
      } 
        else {
          comments = JSON.parse(comments)
        }
      return comments;
    }

    /*este metodo obtiene el array de los comentarios del pokemon que le pasemos
    ahi guarda el comentario que trae y setea estos comentarios en el localStorage*/

    function saveComments (pokemon, comment) {
      let comments = getComments(pokemon)
      comments.push(comment)
      localStorage.setItem(pokemon, JSON.stringify(comments))
    }

    return  {
      all: all,
      byName: byName,
      byType: byType,
      getComments: getComments,
      saveComments: saveComments
    }
  }])
})()