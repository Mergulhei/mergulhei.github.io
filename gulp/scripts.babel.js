import gulp from 'gulp';
import sass from 'gulp-babel';
import paths from './constants.babel';

export default scripts;

function scripts() {
    return gulp.src(`${paths.server}/**/*.js`)
        .pipe(babel())
        .pipe(gulp.dest(`${paths.build}`));
}
