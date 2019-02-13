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

	app.controller('TabsController', ['$scope', function ($scope) {
		$scope.tab = 1

		$scope.selectTab = function (tab) {
			$scope.tab = tab
		}
	}])

	app.directive('pokemonData', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-data.html'
		}
	})

	app.directive('pokemonName', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-name.html'
		}
	})

	app.directive('pokemonImg', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-img.html'
		}
	})

	app.directive('pokemonStats', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-stats.html'
		}
	})

	app.directive('pokemonEvolution', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-evolution.html'
		}
	})

	app.directive('pokemonComments', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-comments.html',
			controller:  ['$scope', function ($scope) {
				$scope.comments = []
				$scope.comment = {}
				$scope.show = false;

				$scope.toggle = function () {
					$scope.show = !$scope.show
				}

				$scope.anonymousChanged = function () {
					if($scope.comment.anonymous) {
						$scope.comment.email = '';
					}
				}

				$scope.addComment = function () {
					$scope.comment.date = Date.now();
					$scope.comments.push($scope.comment)
					$scope.comment = {};
				}
			}
		]}
	})

	app.filter('imageify', function () {
		return function (input) {
			let url = 'img/pokemons/' + input.toLowerCase() + '.jpg'
			return url
		}
		
	})
})()
