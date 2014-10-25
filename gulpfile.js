var gulp        = require('gulp');
var bower       = require('gulp-bower');
var open        = require('gulp-open');
var runSequence = require('run-sequence');

gulp.task('bower', function(){
    return bower('./libraries');
});

gulp.task('open', function(){
    gulp.src('index.html')
        .pipe(open('<%file.path%>'));
});

gulp.task('default', function(){
    runSequence('bower', 'open');
});
