(function () {
	let app = angular.module('Pokedex', [
		'ngRoute',
		'pokedex.controllers',
		'pokedex.directives',
		'pokedex.filters'
		])

		app.config(['$routeProvider', function ($routeProvider) {

			$routeProvider
				.when('/', {
					templateUrl:'views/pokemon.html',
					controller:  'PokemonController'
				})
		}])

})()
