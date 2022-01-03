

var rgb = $('.navbar').css('background-color').replace('rgb(', '').replace(')','' ).split(',').map(Number);
var o = Math.round(((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) /1000);
if(o > 125) {
    $('.navbar .nav > li > a').css('color', 'black');
    $('.navbar-default .navbar-toggle .icon-bar').css('color', 'black');
} else {
    $('.navbar .nav > li > a').css('color', 'white');
    $('.navbar-default .navbar-toggle .icon-bar').css('color', 'white');
}



  $('.navbar-collapse').click(function(event){
      event.stopPropagation();
  });

  $(document).ready(function () { 
    $(document).click(function () {
       // if($(".navbar-collapse").hasClass("in")){
         $('.navbar-collapse').collapse('hide');
       // }
    });
  });


  //Animacion de icon-col en Index y Card
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const col1 = entry.target.querySelector('.icon-col1');
      const col2 = entry.target.querySelector('.icon-col2');
      const col3 = entry.target.querySelector('.icon-col3');
  
      if (entry.isIntersecting) {
        col1.classList.add('icon-col-animation');
        col2.classList.add('icon-col-animation');
        col3.classList.add('icon-col-animation');
      return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      col1.classList.remove('icon-col-animation');
      col2.classList.remove('icon-col-animation');
      col3.classList.remove('icon-col-animation');
    });
  });
  
  observer.observe(document.querySelector('.icon-row'));


  function videoUrl(hmmmmm){
    document.getElementById("slider").src = hmmmmm;
  }

