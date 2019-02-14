/*Este archivo contiene el modulo principal con, sus dependencias
y la configuracion del servicio Provider para las rutas*/

(function () {
	let app = angular.module('Pokedex', [
		'ngRoute',
		'pokedex.controllers',
		'pokedex.directives',
		'pokedex.filters',
		'pokedex.services'
		])

		app.config(['$routeProvider', function ($routeProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/pokedex.html',
					controller: 'PokedexController'
				})
				.when('/pokemon/:name', {
					templateUrl:'views/pokemon.html',
					controller:  'PokemonController'
				})
				.when('/:type', {
					templateUrl: 'views/pokedex.html',
					controller: 'PokedexController'
				})
				.otherwise({
					redirectTo: '/'
				})
		}])

})()
