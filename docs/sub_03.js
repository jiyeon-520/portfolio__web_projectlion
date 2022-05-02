console.clear();
/*헤더*/
$(window).scroll(function() {
  let scrollTop = $(window).scrollTop();
  
  if ($(window).scrollTop()>99) {
    $('.top-bar').addClass('under-line');
  }
  else {
    $('.top-bar').removeClass('under-line');
  }
});


/*메뉴네비*/
$('.menu-intro').click(function(){
let $this = $(this);
$this.parent().siblings().children('.colored').removeClass('colored');
$this.addClass('colored');
});
$('.menu-curr').click(function(){
let $this = $(this);
$this.parent().siblings().children('.colored').removeClass('colored');
$this.addClass('colored');
});
$('.menu-faq').click(function(){
let $this = $(this);
$this.parent().siblings().children('.colored').removeClass('colored');
$this.addClass('colored');
});


/*커리큘럼*/
$('ul.cur > li').click(function() {
  $(this).toggleClass('active');

  if ( $('ul.cur > li:not(.active)').length == 0 ) {
    $('.btn-1').text('모든챕터 축소');
  }
  else {
    $('.btn-1').text('모든챕터 확장');
  }
  
  $('.arrow').toggleClass('horiz');
let aaa = $ ('.arrow').hasClass('horiz');
  if (aaa) {
    $ ('.arrow').removeClass('horiz');
  }
  else {
    $ ('.arrow').addClass('horiz');
  }
});

$('.btn-1').click(function() {
  if ( $('ul.cur > li:not(.active)').length == 0 ) {
    $('ul.cur > li').removeClass('active');
    $('.btn-1').text('모든챕터 확장');
  }
  else {
    $('ul.cur > li').addClass('active');
    $('.btn-1').text('모든챕터 축소');
  }
});

/*자주묻는 질문*/
$('.faq-1').click(function(){
  let arrowup = $ ('.faq-1 .arrow').hasClass('up');
  if (arrowup) {
    $ ('.faq-1 .arrow').removeClass('up');
  }
  else {
    $ ('.faq-1 .arrow').addClass('up');
  }
    let pagedown = $ ('.ans-1').hasClass('show');
  if (pagedown) {
    $ ('.ans-1').removeClass('show');
  }
  else {
    $ ('.ans-1').addClass('show');
  }
});

$('.faq-2').click(function(){
  let arrowup = $ ('.faq-2 .arrow').hasClass('up');
  if (arrowup) {
    $ ('.faq-2 .arrow').removeClass('up');
  }
  else {
    $ ('.faq-2 .arrow').addClass('up');
  }
    let pagedown = $ ('.ans-2').hasClass('show');
  if (pagedown) {
    $ ('.ans-2').removeClass('show');
  }
  else {
    $ ('.ans-2').addClass('show');
  }
});

$('.faq-3').click(function(){
  let arrowup = $ ('.faq-3 .arrow').hasClass('up');
  if (arrowup) {
    $ ('.faq-3 .arrow').removeClass('up');
  }
  else {
    $ ('.faq-3 .arrow').addClass('up');
  }
    let pagedown = $ ('.ans-3').hasClass('show');
  if (pagedown) {
    $ ('.ans-3').removeClass('show');
  }
  else {
    $ ('.ans-3').addClass('show');
  }
});

$('.faq-4').click(function(){
  let arrowup = $ ('.faq-4 .arrow').hasClass('up');
  if (arrowup) {
    $ ('.faq-4 .arrow').removeClass('up');
  }
  else {
    $ ('.faq-4 .arrow').addClass('up');
  }
    let pagedown = $ ('.ans-4').hasClass('show');
  if (pagedown) {
    $ ('.ans-4').removeClass('show');
  }
  else {
    $ ('.ans-4').addClass('show');
  }
});

$('.faq-5').click(function(){
  let arrowup = $ ('.faq-5 .arrow').hasClass('up');
  if (arrowup) {
    $ ('.faq-5 .arrow').removeClass('up');
  }
  else {
    $ ('.faq-5 .arrow').addClass('up');
  }
    let pagedown = $ ('.ans-5').hasClass('show');
  if (pagedown) {
    $ ('.ans-5').removeClass('show');
  }
  else {
    $ ('.ans-5').addClass('show');
  }
});

$('.faq-6').click(function(){
  let arrowup = $ ('.faq-6 .arrow').hasClass('up');
  if (arrowup) {
    $ ('.faq-6 .arrow').removeClass('up');
  }
  else {
    $ ('.faq-6 .arrow').addClass('up');
  }
    let pagedown = $ ('.ans-6').hasClass('show');
  if (pagedown) {
    $ ('.ans-6').removeClass('show');
  }
  else {
    $ ('.ans-6').addClass('show');
  }
});

$('.faq-7').click(function(){
  let arrowup = $ ('.faq-7 .arrow').hasClass('up');
  if (arrowup) {
    $ ('.faq-7 .arrow').removeClass('up');
  }
  else {
    $ ('.faq-7 .arrow').addClass('up');
  }
    let pagedown = $ ('.ans-7').hasClass('show');
  if (pagedown) {
    $ ('.ans-7').removeClass('show');
  }
  else {
    $ ('.ans-7').addClass('show');
  }
});