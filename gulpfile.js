var gulp = require('gulp');
var tsc = require('gulp-tsc');
var mocha = require('gulp-mocha');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

function handleError(err)
{
   console.log(err.toString());
  this.emit('end')   
}

gulp.task('build-ts', function() {
    var tsResult = gulp.src(['./src/**/*.ts'])
            .pipe(ts(tsProject))
            .on('error', handleError)
            .js.pipe(gulp.dest('src'));
});

// gulp.task('test', function () {
//     return gulp
//     .src('./server/tests/**/*.js', { read: false })
//     .pipe(mocha());
// });

gulp.task('default', ['build-ts'], function() {
    gulp.watch('./src/**/*.ts', ['build-ts']);
});