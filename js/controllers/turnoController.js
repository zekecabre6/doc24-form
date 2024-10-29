(function () {
    'use strict';

    angular
        .module('miApp')
        .controller('TurnoController', TurnoController);

        TurnoController.$inject = ['$scope', 'TurnoService', '$location'];

    function TurnoController($scope, TurnoService, $location) {
        var vm = this;
        
        vm.especialidadSeleccionada = '';
        vm.profesionalSeleccionado = '';
        vm.horarioSeleccionado = '';
        vm.nombre = '';
        vm.apellido = '';
        vm.direccion = '';
        vm.telefono = '';
        vm.comentario = '';

        TurnoService.obtenerEspecialidades().then((res) => {
            vm.especialidades = res.data;
        })

        vm.obtenerProfesionales = function(){
            TurnoService.obtenerProfesionales(vm.especialidadSeleccionada).then((res) => {
                vm.profesionales = res;
            })
        }

        vm.obtenerHorarios = function(){
            vm.profesionales.forEach(profesional => {
                if(profesional.nombre === vm.profesionalSeleccionado){
                    vm.horarios = profesional.horarios;
                }
            });
        }

        vm.onSubmit = function(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    TurnoService.enviarFormulario(data).then((res) => {
        console.log(res);

        $scope.$applyAsync(() => {
            $location.path('/turno-solicitado');
        });
    }).catch((error) => {
        console.error('Error al enviar el formulario:', error);
    });
};

    }
})();