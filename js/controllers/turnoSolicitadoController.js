
(function () {
    'use strict';

    angular
        .module('miApp')
        .controller('TurnoSolicitadoController', TurnoSolicitadoController);

    TurnoSolicitadoController.$inject = ['$scope', 'TurnoService'];

    function TurnoSolicitadoController($scope, TurnoService) {
        var vm = this;
    }
})();