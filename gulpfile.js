var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	minifyCSS = require('gulp-minify-css'),
	webserver = require('gulp-webserver');

// Primera tarea - concaqtenara archivos js --> srcipt.js 
gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.js', 'assets/js/*.js'])
		.pipe(concat('script.js'))
		//carpeta dist - guardara el js que se linkeara al html
		.pipe(gulp.dest('dist/js/'));
});

// Segunda tarea - concatena y minifca main.scss --> 
gulp.task('style', function(){
	gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css', 'assets/sass/main.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('dist/css/'));
});

// Tercera tarea
gulp.task('webserver', function(){
	gulp.src('../dark-sky_API/')
		.pipe(webserver({
			fallback: 'index.html',
			livereload: true,
			directoryListing: false,
			open: true
		}));
});

gulp.task('watch', function(){
	gulp.watch('assets/sass/*.scss', ['style']);
});

// Tareas que debera ejecutar al correr el cmd gulp en la terminal
gulp.task('default', ['script', 'style', 'webserver', 'watch']);

