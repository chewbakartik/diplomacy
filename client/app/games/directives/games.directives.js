'use strict';

angular.module('games.directives', [])
	.controller('MapController', ['$scope', 'd3', function($scope, d3) {
		var self = this,
			scope = $scope.$new();

		this.init = function(element) {
			self.$element = element;
			
//				d3.xml('assets/images/bitmap_std.svg', 'image/svg+xml', function(xml) {
//					document.body.appendChild(xml.documentElement);
//				});
		};
	}]
)
.directive('sgMap', function() {
		return {
			restrict: 'EA',
			controller: 'MapController',
			link: function(scope, element, attrs, mapControl) {
			  mapControl.init(element);
			}
		};
	}
);