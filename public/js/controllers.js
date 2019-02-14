(function () {
	angular.module('pokedex.controllers', [])
		
		.controller('PokedexController', ['$scope', '$http', function ($scope, $http) {
			$scope.pokemons = [];
			$http.get('./pokemons.json')
				.then(function (response) {
					$scope.pokemons = response.data
					//console.log(response.data)
				})
		}])

		.controller('PokemonController', ['$scope', function ($scope) {
			$scope.pokemon = {
				id: '001',
	      name: 'Bulbasaur',
	      species: 'Seed Pokemon',
	      type: [ 'Grass', 'Poison' ],
	      height: "2'4",
	      weight: '15.2 lbs',
	      abilities: [ 'Overgrow', 'Chlorophyll'],
	      stats: {
	       	hp: 45,
	        attack: 49,
	        defense: 49,
	        "sp.atk": 65,
	        "sp.def": 65,
	        speed: 45,
	        total: 318
	      },
	      evolution: [ "Bulbasaur", "Ivysaur", "Venusaur" ]
			}
		}])

	.controller('TabsController', ['$scope', function ($scope) {
		$scope.tab = 1

		$scope.selectTab = function (tab) {
			$scope.tab = tab
		}
	}])

})()