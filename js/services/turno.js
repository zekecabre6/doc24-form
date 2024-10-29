(function() {
    'use strict';
  
    angular
        .module('miApp')
        .factory('TurnoService', TurnoService);
  
    TurnoService.$inject = ['$http'];
  
    function TurnoService($http) {
        var service = this;
  
        // Definir la URL base del servicio
        var apiBaseUrl = `${window.location.origin}`;
  
        service.obtenerEspecialidades = function() {
            var promise = $http.get(`${apiBaseUrl}/api/especialidades`)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    console.error('Error al obtener especialidades:', error);
                    throw error;
                });
  
            return promise;
        };

        service.obtenerProfesionales = function(especialidad) {
            var promise = $http.get(`${apiBaseUrl}/api/profesionales/${especialidad}`)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    console.error('Error al obtener profesionales:', error);
                    throw error;
                });
  
            return promise;
        }

        service.enviarFormulario = function(datos) {
            var promise = $http.post(`${apiBaseUrl}/api/formulario`, datos)
                .catch(function(error) {
                    console.error('Error los datos de formulario:', error);
                    throw error;
                });
  
            return promise;
        }
  
        return {
            obtenerEspecialidades: function() {
                return service.obtenerEspecialidades();
            },
            obtenerProfesionales: function(especialidad) {
                return service.obtenerProfesionales(especialidad);
            },
            enviarFormulario: function(datos) {
                return service.enviarFormulario(datos);
            }
        };
    }
  })();