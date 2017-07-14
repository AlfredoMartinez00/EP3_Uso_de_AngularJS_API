angular.module("peliculas", ["ngResource"])

.factory("Post",function($resource){
  return $resource("http://api.themoviedb.org/3/discover/movie?api_key=9e70ea54560ff918c33b55965087169f",{},{
    query: {method: "GET", isArray:false}
  });
})



.controller("MoviesController",function($scope,Post){
  Post.query(function(data){
    $scope.movies = data.results;
    console.log($scope.movies);
  })
})

.controller("FirstController",function($scope,$http){
  $scope.inicio = 100;
  $scope.arreglo=[];
  $scope.nombres=[];
  $scope.ver = function(){
    console.log($scope.nombre);
  }

  $scope.contar = function(){
    $scope.restante = $scope.inicio - $scope.texto.length;
    console.log($scope.restante);
  }

  $scope.publicar = function(){
      if($scope.nombre==null){
        alert("El nombre solo debe contener letras")
      }else{
        if ($scope.restante<0) {
          alert("Ha sobrepasado el límite");
        }else{
          if($scope.texto==null){
            alert("No ha introducido texto aún");
          }else{
            $scope.arreglo.push({post:$scope.texto});
            $scope.nombres.push({post:$scope.nombre});
            $scope.restante=100;
            document.querySelector("#textarea").value="";
          }
        }
      }
    }
})
