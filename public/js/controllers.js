(function () {
	angular.module('pokedex.controllers', [])
		
		.controller('PokedexController', ['$scope', 'PokemonService', function ($scope, PokemonService) {
			$scope.pokemons = [];
			
			PokemonService.all()
				.then(function (response) {
					$scope.pokemons = response
				})
		}])

		.controller('PokemonController', ['$scope', 'PokemonService', '$routeParams', function ($scope, PokemonService, $routeParams) {
			$scope.pokemon = {}
			let name = $routeParams.name;
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