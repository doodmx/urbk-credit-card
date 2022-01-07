

// var rgb = $('.navbar').css('background-color').replace('rgb(', '').replace(')','' ).split(',').map(Number);
// var o = Math.round(((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) /1000);
// if(o > 125) {
//     $('.navbar .nav > li > a').css('color', 'black');
//     $('.navbar-default .navbar-toggle .icon-bar').css('color', 'black');
// } else {
//     $('.navbar .nav > li > a').css('color', 'white');
//     $('.navbar-default .navbar-toggle .icon-bar').css('color', 'white');
// }



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
  
  // observer.observe(document.querySelector('.icon-row'));


  function videoUrl(hmmmmm){
    document.getElementById("slider").src = hmmmmm;
  }

  window.onscroll = function (e) {
    console.log(window.scrollY);
  };


  ///////////////////////////////////////////////////////////////////////////////
  // if (
  //   "IntersectionObserver" in window &&
  //   "IntersectionObserverEntry" in window &&
  //   "intersectionRatio" in window.IntersectionObserverEntry.prototype
  // ) {
  //     var element = document.getElementById("float-solicitar-contacto");
  //     let observer = new IntersectionObserver(entries => {
        
        
        
  //       if (entries[0].boundingClientRect.y < 0) {
  //         console.log("Probando")
  //         element.classList.add("float-solicitar-azul");
  //         // document.body.classList.add("header-not-at-top");
  //       } else {
  //         element.classList.remove("float-solicitar-azul");
  //         // document.body.classList.remove("header-not-at-top");
  //       }
  //     });
  //     observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
  //     }


//-------------------------------------------Formulario------------------------------------------------

$( "#cardForm" ).submit(function( event ) {

  //your code
      console.log("prueba")
      var nameForm = document.getElementById('name').value; 
      var lastNameForm = document.getElementById('lastName').value; 
      var emailForm = document.getElementById('email').value; 
      var phoneForm = document.getElementById('phoneNumber').value; 
      
    axios.post('https://dood-azell-giveaway-api.herokuapp.com/credit-card',{name:nameForm, lastName:lastNameForm, email:emailForm, phoneNumber:phoneForm},{Headers:{"Content-Type": "text/json"}})
      .then((res)=>{
          // alert('All good')
          // window.location.replace("https://www.bing.com/");
          // document.location.href=document.location.href.splitOnLast('/')[0]+"/thankyou.html";
          console.log(res)
          document.querySelector('.creditcard-thankyou-section').classList.add('visible');
          document.querySelector('.creditcard-thankyou-section').classList.remove('invisible');
          document.querySelector('.creditcard-form-section').classList.add('invisible');
      }).catch((error)=>{
          alert(error.response.data.message)
          console.table(error)
      });
        

  event.preventDefault();
});

console.log("prueba2")




