(function () {
	angular.module('pokedex.filters', [])
		.filter('imageify', function () {
			return function (input) {
				let url = 'img/pokemons/' + input.toLowerCase() + '.jpg'
				return url
			}		
		})
})()