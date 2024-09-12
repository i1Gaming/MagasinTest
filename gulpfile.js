const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();

function style () {
    return gulp.src("./scss/**/*.scss") 
            .pipe(sass())               
            .pipe(gulp.dest("./static/css"))   
            .pipe(browserSync.stream())
}

function build() {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./static/css'));
};

function watch () {
    gulp.watch("./scss/**/*.scss", style);
}
exports.style = style;
exports.build = build;
exports.watch = watch;
     