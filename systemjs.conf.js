(function() {
    var packages = [
        'angular2',
        'rxjs',
        'es6-shim',
        'systemjs'
    ];

    var config = {
        defaultJSExtensions: true,
        baseUrl: '.',
        paths: {
            'n:*': 'node_modules/*'
        },
        map: {
            'rxjs': 'node_modules/rxjs',
            'es6-shim':'node_modules/es6-shim',
            'systemjs':'node_modules/systemjs'
        },
        packages: {
            'app': {
                format: 'register',
                defaultExtension: 'js'
            },
            "angular2":{
                format: 'register',
                defaultExtension: 'js'
            }
        }
    };

    for (var i = packages.length - 1; i >= 0; i--) {
        var package = packages[i];
        config.map[package] = 'n:' + package;
        config.packages[package] = {
            defaultExtension: 'js'
        };
    }
    System.config(config);
})();
