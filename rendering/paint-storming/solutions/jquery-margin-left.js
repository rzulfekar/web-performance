const $box = $('.box');

$box.on('click', () => {
  $box.animate({
    marginLeft: '500px',
  }, 0.5);
});
