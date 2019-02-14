/*Este archivo con tiene las directivas de los partials

	Partials = pequeñas porciones de codigo
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

		.directive('pokemonComments', function () {
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

})()