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
            resolve: {
                data: ($route, ApiService) =>
                  ApiService.getBands(),
            },
        })
        .when('/band/:bandId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                artists: ($route, ApiService) =>
                  ApiService.getArtists($route.current.params.bandId),
                albums: ($route, ApiService) =>
                  ApiService.getAlbums($route.current.params.bandId),
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
