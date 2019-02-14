/*Este archivo contiene los controladores de nuestra app*/
/* 
	PokemonService= servicio del pokemon, factory.
	$routeParams = es un metodo de ngRoute que nos permite obtener los parametros de una ruta
*/
(function () {
	angular.module('pokedex.controllers', [])
		
		/*PAra la vista de pokedex*/
		.controller('PokedexController', ['$scope', 'PokemonService', '$routeParams', function ($scope, PokemonService, $routeParams) {
			let type = $routeParams.type;

			/*si  en la ruta hay un tipo como parametro, usemos el servicio 
			que obtiene todos los pokemon con ese tipo*/
			if (type) {
				$scope.type = type;
				PokemonService.byType(type)
					.then(function (response) {
						$scope.pokemons = response
					})
			} /*si no obtengamos todos lo pokemon*/
				else {
					PokemonService.all()
						.then(function (response) {
						$scope.pokemons = response
					})
				}
		}])

		/*para la vista de cada pokemon con sus caracteristicas*/
		.controller('PokemonController', ['$scope', 'PokemonService', '$routeParams', function ($scope, PokemonService, $routeParams) {
			$scope.pokemon = {}
			let name = $routeParams.name;

			/*Obtenga el pokemon que tenga el mismo nombre,  y guardelo en el objteo del pokemon*/
			PokemonService.byName(name)
				.then(function (response) {
					$scope.pokemon = response
				})
		}])

	.controller('TabsController', ['$scope', function ($scope) {
		$scope.tab = 1

		$scope.selectTab = function (tab) {
			$scope.tab = tab
		}
	}])

})()