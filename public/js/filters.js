/*Este archivo contiene dos filtros, uno para normalizar el nombra que contenga caracteres raros,
retorna ese input en minusculas
El otro toma el input que le pasemos y contruye una ruta hacia las imaenes de los pokemons
*/
(function () {
	angular.module('pokedex.filters', [])
		.filter('normalize', function () {
			return function (input) {
				input = input
							.replace('♂', 'm')
							.replace('♀', 'f')
							.replace(/\W+/g, '')
				return input.toLowerCase();

			}
		})

		.filter('imageify', ['$filter', function ($filter) {
			return function (input) {
				let url = 'img/pokemons/' + $filter('normalize')(input) + '.jpg'
				return url
			}		
		}])
})()