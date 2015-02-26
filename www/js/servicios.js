angular.module('servicios',[]).

    factory('Geolocalizacion',function($q){


        return{

          getPosicionActual:function(){

              var deferred=$q.defer();

              if(navigator.geolocation){

                  navigator.geolocation.getCurrentPosition(

                      function(pos){

                          var miPosicion={
                              latitud:pos.coords.latitude,
                              longitud:pos.coords.longitude


                          };
                          deferred.resolve(miPosicion);
                      },
                      function (err) {

                          deferred.reject(err);
                      }
                  );
              }
              else{

                  deferred.reject({message:'No esta presente la geolocalización'});

              }
              return deferred.promise;



          }


        }



    });