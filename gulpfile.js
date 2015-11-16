var gulp = require('gulp');
var connect = require('gulp-connect');
var protractor = require('gulp-protractor');
var server = require('gulp-server-livereload');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

gulp.task('connect', function() {
    var compiler = webpack(webpackConfig);

    connect.server({
        root: [__dirname],
        livereload: false,
        port: 8088,
        middleware: function(connect) {
            return [
                connect().use(webpackDevMiddleware(compiler, {
                    noInfo: true,
                    publicPath: webpackConfig.output.publicPath
                })),
                connect().use(webpackHotMiddleware(compiler))
            ]
        }
    });
});

gulp.task('webdriver-update', function(done) {
    var browsers = ['chrome'];

    if(process.platform === 'win32') {
        browsers.push('ie');
    }

    protractor.webdriver_update({browsers: browsers}, done);
});

gulp.task('webdriver-standalone', protractor.webdriver_standalone);

gulp.task('test', ['webdriver-update'], TestE2eTask);

gulp.task('testserver', ServerTask);

function TestE2eTask() {
    return gulp.src('./src/components/**/*.spec.js')
        .pipe(protractor.protractor({
            configFile: 'protractor.conf.js'
        }))
        .on('error',function(err){
            //console.log('error message from test e2e', err);
            //throw err;
        }).on('end',function(){
            /*if(testWebServer){
                testWebServer.emit('kill');
            }*/
        });

}

var testWebServer;
function ServerTask(){
    testWebServer = gulp.src(__dirname).pipe(server());
}

gulp.task('default', ['connect']);
