
(function () {
    'use strict';

    angular
        .module('miApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$location'];

    function NavbarController($location) {
        var vm = this;

        vm.isHomePage = function() {
            return $location.path() === '/inicio';
        };
    }
})();
