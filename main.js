let menu = document.querySelector('#menu-btn')
let header = document.querySelector('.header')


menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}



let themetoggler = document.querySelector('#theme-toggler');
themetoggler.onclick = () =>{
    themetoggler.classList.toggle('fa-sun');
    if(themetoggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}


/*number count*/
$('.number-inc').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-max');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 1500,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
  });  
});/*number count end*/








//gallery filter//

const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
     // deactivate existing active 'filter-item'
     filterContainer.querySelector(".active").classList.remove("active");
     // activate new 'filter-item'
     event.target.classList.add("active");
     const filterValue = event.target.getAttribute("data-filter");
     galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
         item.classList.add("show");
      }
      else{
        item.classList.remove("show");
        item.classList.add("hide");
      }
     });
  }
});
//gallery filter end//








/*faq start*/



jQuery(document).ready(function($){
  $('.question').on('click', function(){
    if($(this).hasClass('active')){
      $('.question').removeClass('active');
      $('.arrow').removeClass('arrow-active');
      $('.answer').slideUp();
    }
    else{
      $('.question').removeClass('active');
      $('.arrow').removeClass('arrow-active');
      $('.answer').slideUp();
      $(this).addClass('active');
      $(this).children('.arrow').addClass('arrow-active');
      $(this).children('.answer').slideToggle('slow');
    }
  });
});
/*faq end*/







function sendemail(){
  Email.send({
      SecureToken:"efb46864-cfb7-48f5-9eaa-93b7cd474e25",
      To : 'j.i.jahid90@gmail.com',
      From : document.getElementById("email").value,
      Subject : "New Contact Form Enquiry",
      Body : "Name: "+ document.getElementById("name").value
      + "<br> Email: " + document.getElementById("email").value
      + "<br> Message: " + document.getElementById("massage").value
  }).then(
  message => alert("message Sent Succesfully")
  );}