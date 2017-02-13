var gulp=require('gulp');
var browserSync=require('browser-sync');
var nodemon= require('gulp-nodemon');

var reload= browserSync.reload();
var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('watch',function(){
  gulp.watch('server/**/*.js',['bs-reload']);
  gulp.watch('client/app/**/*.js',['bs-reload']);
  gulp.watch('client/app/**/*.html',['bs-reload']);

});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('nodemon',function(cb){
  var called= false;
  return nodemon({
    //nodemon our expressjs server
    script: 'server/index.js',
    watch: ['server/index.js','server/**/*.js']
  })
  .on('start', function onStart() {
  // ensure start only got called once
  if (!called) { cb(); }
  called = true;
})
.on('restart', function onRestart() {
  // reload connected browsers after a slight delay
  setTimeout(function reload() {
    browserSync.reload({
      stream: false
    });
  }, BROWSER_SYNC_RELOAD_DELAY);
});
})


gulp.task('browser-sync',['nodemon'],function(){
  browserSync.init({
    notify: false,
    proxy: 'http://localhost:3000',
    port: 3001,
    browser: ['firefox']
  });
});

gulp.task('default',['browser-sync','watch']);
