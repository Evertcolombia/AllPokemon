(function () {
	let app = angular.module('Pokedex', [])

	app.controller('PokemonController', ['$scope', function ($scope) {
		$scope.pokemon = {
			id: '001',
      name: 'Bulbasaur',
      species: 'Seed Pokemon',
      type: [ 'Grass', 'Poison' ],
      height: "2'4",
      weight: '15.2 lbs',
      abilities: [ 'Overgrow', 'Chlorophyll']
		}
	}])
})()
