(function () {
	angular.module('pokedex.controllers', [])
		
		.controller('PokedexController', ['$scope', 'PokemonService', function ($scope, PokemonService) {
			$scope.pokemons = [];
			
			PokemonService.all()
				.then(function (response) {
					$scope.pokemons = response
				})
		}])

		.controller('PokemonController', ['$scope', 'PokemonService', function ($scope, PokemonService) {
			$scope.pokemon = {}
			PokemonService.byName('charizard')
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