/*Este archivo contiene los controladores de nuestra app*/
/* 
	PokemonService= servicio del pokemon, factory.
	$routeParams = es un metodo de ngRoute que nos permite obtener los parametros de una ruta
	_ = esta libreria sirve para el el filtrado de datos entre muchas otras cosas
*/
(function (_) {
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
						$scope.groupped = partition(response, 4)
						
					})
			} /*si no obtengamos todos lo pokemon*/
				else {
					PokemonService.all()
						.then(function (response) {
						$scope.pokemons = response
						$scope.groupped = partition(response, 4)
						debugger
						
					})
				}
			/*este metodo recibe una lista y un numero, el numero represental al grupo de elementos que contendra cada 
			particion, usa underscore para hacer esto con sus metodos y retorna un 
			array con cada 4 elementos */
			function partition (data, n) {
				return _.chain(data).groupBy(function (element, index) {
					return Math.floor(index / n);
				}).toArray().value()
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

})(_)