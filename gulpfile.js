var gulp = require ('gulp'),
    gutil= require ('gulp-util'),
	compass = require ('gulp-compass'),
	webserver = require('gulp-webserver');
	
	
	
 sassSources = ['sasscomponents/style.scss']; // the sasscomponents folder also contains '_mixins.scss' or '_variables.scss'

gulp.task ('compass', function() {
	gulp.src(sassSources)  
	.pipe(compass({
		 sass: 'sasscomponents',
		 css: 'child_theme', // default was folder called 'css'
		 style: 'expanded'
	}))
	.on('error', gutil.log)
	.pipe(gulp.dest('child_theme/')) // destination folder eg 'builds/nameapp/css' 

}); 



gulp.task ('watch', function() {
    gulp.watch('sasscomponents/*.scss',['compass']); 
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});


 gulp.task ('default', ['compass', 'watch', 'webserver']);
