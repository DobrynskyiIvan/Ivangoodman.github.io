const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const image = require('gulp-image');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('wwwroot/scss/**/*.+(sass|scss)')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['ie 8', '> 1%', 'last 10 versions']))
        .pipe(gulp.dest('wwwroot/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('css-libs', () => {
    return gulp.src('wwwroot/scss/libs.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('wwwroot/css'));
});

gulp.task('script', () => {
    return gulp.src([
            'wwwroot/libs/jquery/dist/jquery.min.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('wwwroot/js'));
});

gulp.task('html', () => {
    return gulp.src('wwwroot/index.html')
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: 'wwwroot'
        },
        notify: false
    });
});

gulp.task('image', async () => {
    gulp.src('wwwroot/img/**/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            guetzli: false,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true // defaults to false
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('clean', async () => {
    return del.sync('dist');
});

gulp.task('prebuild', async () => {
    gulp.src(['wwwroot/css/style.css', 'wwwroot/css/libs.min.css'])
        .pipe(gulp.dest('dist/css'));
    gulp.src('wwwroot/js/**/*')
        .pipe(gulp.dest('dist/js'));
    gulp.src('wwwroot/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    gulp.watch('wwwroot/scss/**/*.+(sass|scss)', gulp.parallel('sass'));
    gulp.watch(['wwwroot/js/index.js', 'wwwroots/libs/**/*.js'], gulp.parallel('script'));
    gulp.watch('wwwroot/index.html', gulp.parallel('html'));
});

gulp.task('default', gulp.parallel('css-libs', 'sass', 'browser-sync', 'watch'));
gulp.task('build', gulp.parallel('prebuild', 'clean', 'image', 'sass', 'script'));