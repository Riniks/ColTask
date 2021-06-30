$(document).ready(function(){
  
    $(".i-smallimg img").click(function(){
      var CurrentImageURL = $(this).attr("src");
      $(".i-bigimage img").attr("src", CurrentImageURL);
      
    });
  
    $(".i-smallimg img").click(function(){
      $(this).addClass("active");
      var that = this;
      setTimeout(function(){
            $(that).removeClass('active');
      }, 1500);
    });
    
});