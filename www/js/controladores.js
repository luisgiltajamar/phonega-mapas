angular.module('controladores',[]).
    controller('MapasController',function($scope,Geolocalizacion){

        $scope.mapaCargado=function(map){
          $scope.map=map;

            Geolocalizacion.getPosicionActual().then(

                function(pos){

                    $scope.map.setCenter(new google.maps.LatLng(
                        pos.latitud,
                        pos.longitud));

                },


                function (err) {

                    alert(err.message);


                })

        };







    });