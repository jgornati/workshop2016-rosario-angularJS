import 'angular-route';

export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider
        .otherwise('/')
        .when('/', {
            templateUrl: '/components/app/views/index.html',
<<<<<<< HEAD
        resolve: {
               data: ($route, ApiService) =>//Implement API call to get bands
                ApiService.getBands(),
             },
=======
            resolve: {
                data: ($route, ApiService) =>
                  ApiService.getBands(),
            },
>>>>>>> b138c00268b9b809b55e5e623eeccdc56231af70
        })
        .when('/band/:bandId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
              artists: ($route, ApiService) =>
                  ApiService.getBand($route.current.params.bandId),
              // albums: //Implement API call to get albums
            },
        })
        .when('/band/:bandId/album/:albumId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                data: ($route, ApiService) =>
                  ApiService.getAlbmuns(),
            },
        })
        .when('/band/:bandId/album/:albumId/track/:trackId/', {
            templateUrl: '/components/app/views/band-detail.html',
            // resolve: {
            //     artists, albums, tracks and comments requests in here
            // },
        });
}
