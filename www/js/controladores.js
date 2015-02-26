angular.module('controladores',[]).
    controller('MapasController',function(Geolocalizacion){


        Geolocalizacion.getPosicionActual().then(

            function(pos){

                alert("Mi ubicacion: "+pos.latitud+" "+pos.longitud);


            },


            function (err) {

                alert(err.message);


        })




    });