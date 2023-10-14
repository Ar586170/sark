function gulpLTR() {

    /* Variable Defination */
    var gulp = require('gulp');
    var sass = require('gulp-sass')(require('sass'));
    var cssbeautify = require('gulp-cssbeautify');
    var autoprefixer = require('gulp-autoprefixer');
    var nunjucksRender = require('gulp-nunjucks-render');
    var htmlbeautify = require('gulp-html-beautify');
    // var gulpimage  = require('gulp-image');
    var browserSync = require('browser-sync').create();

    // Browser Sync
    gulp.task('browserSync', function() {
        browserSync.init({
            server: "public/"
        });
        gulp.watch("src/sass/**/*.scss", gulp.series('sass'));
        gulp.watch("src/html/**/*.html", gulp.series('nunjucksRender'));
        gulp.watch("src/js/**/*", gulp.series('copy-js'));
        gulp.watch("src/css/**/*", gulp.series('copy-css'));
        gulp.watch("src/sass/**/*", gulp.series('copy-scss'));
        gulp.watch("src/media/**/*", gulp.series('copy-img'));
        //gulp.watch("app/media/**/*", gulp.series('gulpimage'));
    });

    // Compile Sass File
    gulp.task('sass', function() {
        return gulp.src('src/sass/app.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(cssbeautify({
                indent: '    ',
            }))
            .pipe(gulp.dest('public/assets/css'))
            .pipe(browserSync.stream());
    });

    // NunjucjsRender
    gulp.task('nunjucksRender', function() {
        return gulp.src('src/html/*.html')
            .pipe(nunjucksRender({
                path: ['src/html/template-parts/']
            }))
            .pipe(htmlbeautify({
                indentSize: 2
            }))
            .pipe(gulp.dest('public/'))
            .pipe(browserSync.stream());
    });    
    
    // NunjucjsRender
    gulp.task('nunjucksRender', function() {
        return gulp.src('src/html/**/*.+(html)')
            .pipe(nunjucksRender({
                path: ['src/html/template-parts/']
            }))
            .pipe(htmlbeautify({
                indentSize: 2
            }))
            .pipe(gulp.dest('public/'))
            .pipe(browserSync.stream());
    });

    // Gulp Image //
    //gulp.task('gulpimage', function () {
    //return gulp.src('app/media/**/*')
    //.pipe(gulpimage({
    //jpegRecompress: false,
    //}))
    //.pipe(gulp.dest('public/media'))
    //.pipe(browserSync.stream());
    //});

    // copy JS
    gulp.task('copy-js', function() {
        return gulp.src('src/js/**/*')
            .pipe(gulp.dest('public/assets/js'))
            .pipe(browserSync.stream());
    });

    // copy CSS
    gulp.task('copy-css', function() {
        return gulp.src('src/css/**/*')
            .pipe(gulp.dest('public/assets/css'))
            .pipe(browserSync.stream());
    });

    // copy Sass
    gulp.task('copy-scss', function() {
        return gulp.src('src/sass/**/*')
            .pipe(gulp.dest('public/assets/scss'))
            .pipe(browserSync.stream());
    });

    // copy Images
    gulp.task('copy-img', function() {
        return gulp.src('src/media/**/*')
            .pipe(gulp.dest('public/assets/media'))
            .pipe(browserSync.stream());
    });


    //Defult Task
    gulp.task('default', gulp.parallel('browserSync'));

}

function gulpRTL() {

    /* Variable Defination */
    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var cssbeautify = require('gulp-cssbeautify');
    var autoprefixer = require('gulp-autoprefixer');
    var nunjucksRender = require('gulp-nunjucks-render');
    var htmlbeautify = require('gulp-html-beautify');
    // var gulpimage  = require('gulp-image');
    var browserSync = require('browser-sync').create();

    // Browser Sync
    gulp.task('browserSync', function() {
        browserSync.init({
            server: "rtl/"
        });
        gulp.watch("src/sass/**/*.scss", gulp.series('sass'));
        gulp.watch("src/html/**/*.html", gulp.series('nunjucksRender'));
        gulp.watch("src/js/**/*", gulp.series('copy-js'));
        gulp.watch("src/css/**/*", gulp.series('copy-css'));
        gulp.watch("src/sass/**/*", gulp.series('copy-scss'));
        gulp.watch("src/media/**/*", gulp.series('copy-img'));
        //gulp.watch("app/media/**/*", gulp.series('gulpimage'));
    });

    // Compile Sass File
    gulp.task('sass', function() {
        return gulp.src('src/sass/app.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(cssbeautify({
                indent: '    ',
            }))
            .pipe(gulp.dest('rtl/assets/css'))
            .pipe(browserSync.stream());
    });

    // NunjucjsRender
    gulp.task('nunjucksRender', function() {
        return gulp.src('src/html/*.html')
            .pipe(nunjucksRender({
                path: ['src/html/template-parts/']
            }))
            .pipe(htmlbeautify({
                indentSize: 2
            }))
            .pipe(gulp.dest('rtl/'))
            .pipe(browserSync.stream());
    });

    // Gulp Image //
    //gulp.task('gulpimage', function () {
    //return gulp.src('app/media/**/*')
    //.pipe(gulpimage({
    //jpegRecompress: false,
    //}))
    //.pipe(gulp.dest('rtl/media'))
    //.pipe(browserSync.stream());
    //});

    // copy JS
    gulp.task('copy-js', function() {
        return gulp.src('src/js/**/*')
            .pipe(gulp.dest('rtl/assets/js'))
            .pipe(browserSync.stream());
    });

    // copy CSS
    gulp.task('copy-css', function() {
        return gulp.src('src/css/**/*')
            .pipe(gulp.dest('rtl/assets/css'))
            .pipe(browserSync.stream());
    });

    // copy Sass
    gulp.task('copy-scss', function() {
        return gulp.src('src/sass/**/*')
            .pipe(gulp.dest('rtl/assets/scss'))
            .pipe(browserSync.stream());
    });

    // copy Images
    gulp.task('copy-img', function() {
        return gulp.src('src/media/**/*')
            .pipe(gulp.dest('rtl/assets/media'))
            .pipe(browserSync.stream());
    });


    //Defult Task
    gulp.task('default', gulp.parallel('browserSync'));

}


gulpLTR();

// gulpRTL();