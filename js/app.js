(function () {
  'use strict';

  angular
    .module('miApp', ['ui.router'])
    .config(configure)
    .controller('MainController', MainController);

  configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function configure($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/inicio');

    $stateProvider
      .state('inicio', {
        url: '/inicio',
        templateUrl: 'pages/inicio.html',
        controller: 'InicioController as inicioCtrl',
        resolve: {
          contenidoInicio: ['InicioService', function (InicioService) {
            return InicioService.obtenerDatosInicio()
              .then(function (response) {
                return response;
              })
              .catch(function (error) {
                console.log('Error obteniendo datos de inicio');
                throw error;
              });
          }]
        }
      }).state('solicitarTurno', {  // Nueva ruta /solicitar-turno
        url: '/solicitar-turno',
        templateUrl: 'pages/solicitar-turno.html',
        controller: 'TurnoController as turnoCtrl'
      }).state('turnoSolicitado', {  // Nueva ruta /turno-solicitado
        url: '/turno-solicitado',
        templateUrl: 'pages/turno-solicitado.html',
        controller: 'TurnoSolicitadoController as turnoSolicitadoCtrl'
      });
  }

  MainController.$inject = ['$scope', '$location'];
function MainController($scope, $location) {
    var vm = this;

    vm.isInicioPage = function() {
        return $location.path() === '/inicio';
    };
}

})();