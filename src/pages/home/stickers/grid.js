export default $root => {
  const $grid = $('.stickers__grid');
  const $gridItem = $('.stickers__grid-item');
  const $gridItemHeight = $gridItem.outerHeight();
  let lines;
  if(window.innerWidth < 768) {
    lines = 2;
  } else {
    lines = 1;
  }
  const maxHeight = $gridItemHeight * lines + 8;
  const $showMore = $('.stickers__more');


  function setHeight(height){
    $grid.css('height', height);
  }

  setHeight(maxHeight)

  $showMore.on('click', function(){
    if($(this).hasClass('show')) {
      $(this).removeClass('show');
      setHeight(maxHeight);
    } else {
      $(this).addClass('show');
      setHeight('auto')
    }
  })
}
