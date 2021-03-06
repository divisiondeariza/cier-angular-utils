'use strict';

describe('cier.utils.fooBarDirective directive', function(){
	var compile, scope, directiveElem;

	function getCompiledElement(){
		var element = angular.element('<foo-bar></foo-bar>');
		var compiledElement = compile(element)(scope);
		
		scope.$digest();
		return compiledElement;
	}

	beforeEach(function(){
		module('cier.utils.fooBarDirective');
		module("my.templates"); 
		inject(function($compile, $rootScope){
			compile = $compile;
			scope = $rootScope.$new();

		});
		directiveElem = getCompiledElement();
	});

	it('should be rendered', function(){
		expect(directiveElem.html()).not.toEqual('');
	});


})