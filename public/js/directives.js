/*Este archivo con tiene las directivas de los partials

	Partials = pequeñas porciones de codigo
	link = es un metodo que se ejecutara cada vez que se cargue la directiva
	$observe = es un metodo que nos permite escuchar por cambios en atributos que estan en el DOM
*/

(function () {
	angular.module('pokedex.directives', [])

		.directive('pokemonData', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/pokemon-data.html'
			}
		})

		.directive('pokemonName', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/pokemon-name.html'
			}
		})

		.directive('pokemonImg', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/pokemon-img.html'
			}
		})

		.directive('pokemonStats', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/pokemon-stats.html'
			}
		})

		.directive('pokemonEvolution', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/pokemon-evolution.html'
			}
		})

		.directive('pokemonType', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/pokemon-type.html'
			}
		})

		.directive('pokemonComments', ['PokemonService', function (PokemonService) {
			return {
				restrict: 'E',
				templateUrl: 'partials/pokemon-comments.html',
				scope: {
					name: '@name'
				},
				link: function (scope, element, attributes) {
					attributes.$observe('name', function (value) {
						if(value) {
							scope.name = value
							scope.comments = PokemonService.getComments(value)
						}
					})
				},
				controller:  ['$scope', function ($scope) {
					$scope.comments = PokemonService.getComments($scope.name)
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
						PokemonService.saveComments($scope.name, $scope.comment)
						$scope.comments = PokemonService.getComments($scope.name)
						$scope.comment = {};
					}
				}
			]}
		}])

})()