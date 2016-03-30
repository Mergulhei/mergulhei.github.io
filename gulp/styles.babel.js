import gulp from 'gulp';
import sass from 'gulp-sass';
import paths from './constants.babel';

export default styles;

function styles() {
    return gulp.src(`${paths.public}/stylesheet/master.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(`${paths.public}/stylesheet/style.css`));
}
