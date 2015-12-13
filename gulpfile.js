'use strict';

var gulp = require('gulp');
var path = require('path');
var argv = require('yargs').argv;
var del = require('del');
var util = require('gulp-util');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

var paths = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist')
};

// Delete the dist directory
gulp.task('clean', function(done) {
	return del([paths.dist], done);
});

// Lints the javascript files
gulp.task('lint', function() {
	return gulp.src(path.join(paths.src, '/**/*.js'))
	 	.pipe(jshint()) // lint out file
 	 	.pipe(jshint.reporter('jshint-stylish')) // output using jshint-stylish
//		.pipe(jshint.reporter('fail')); // fail build if JSHint errors occur
});

// Process scripts and concatenate them into one output file
gulp.task('copy', gulp.series(
	gulp.parallel(['clean', 'lint']), 
	function() {
		return gulp.src(path.join(paths.src, '/**/*.js'))
			.pipe(gulp.dest(paths.dist)) // copy original to destination folder
			.pipe(sourcemaps.init()) // start watching for sourcemap
 	 		.pipe(uglify()) // minify the code
	 		.pipe(rename({suffix: '.min'})) //rename to .min
			.pipe(sourcemaps.write('./')) // write sourcemap
			.pipe(gulp.dest(paths.dist));  // copy minified version to destination folder
}));

// A development task to run anytime a file changes
gulp.task('watch', function() {
	gulp.watch(path.join(paths.src, '/**/*'), ['lint']);
});

// Define the default task as a sequence of the above tasks
gulp.task('default', gulp.series(['copy']));