const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

/* visszaszamlalo */
var countDownDate = new Date("Aug 25, 2023 10:00:00").getTime();
var x = setInterval(timeTicker, 1000);
timeTicker();
function timeTicker(){
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>nap</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>óra</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>perc</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>másodperc</div> \
</div>";

  if(distance < 0)
  {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Gyere ki a fesztiválra !";
  }
}
/* menu bar hattere*/
$(() => {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("active");
      }else {
        $(".header").removeClass("active");
      }
    });
  });

// ha nem a tetején van újratöltéskor is betöltődik a header háttér
window.addEventListener('load', function(){
  if ($(window).scrollTop() > 50) {
    $(".header").addClass("active");
  }else {
    $(".header").removeClass("active");
  }
})

/* Rolunkhoz legördül*/
// ha mas oldalrol hivtuk meg a legorgetest akkor elvegezzuk
if (params["scrollto"] !== undefined) {
  scrollFunction(params["scrollto"]);
}

function scrollFunction(to) {
  if (window.location.pathname === "/kapcsolat/") {
    window.location = "/?scrollto=rolunkcontent";
    return;
  }else if (window.location.pathname === "/fellepok/"){
    window.location = "/?scrollto=rolunkcontent";
    return;
  }else if (window.location.pathname === "/kepregeny"){
    window.location = "/?scrollto=rolunkcontent";
    return;
  }else if (window.location.pathname === "/jegyek/"){
      window.location = "/?scrollto=rolunkcontent";
      return;
  }
  setTimeout(() => {
    let e = document.getElementById(to||"rolunkcontent");
    e.scrollIntoView();  
  }, 500);
};
window.onresize = () => {
  if (window.innerWidth <= 600) {
    $(".prt").css("display", "block");
    $(".prt").css("width", "100%");
    $(".prt").css("margin", "0 auto");
    $(".prt").css("position", "relative");
    $(".prt").css("top", "150px");
    $(".ls").css("display", "none");
  }
  else {
    $(".ls").css("display", "block");
    $(".prt").css("display", "none");
  }
}

window.addEventListener('load', function(){
  if ($(window).innerWidth() <= 600) {
    $(".prt").css("display", "block");
    $(".prt").css("width", "100%");
    $(".prt").css("margin", "0 auto");
    $(".prt").css("position", "relative");
    $(".prt").css("top", "150px");
    $(".ls").css("display", "none");
  }else {
    $(".ls").css("display", "block");
    $(".prt").css("display", "none");
  }
  setTimeout(() => {
    $(".loader").css("transform", "translateY(-100%)");
  }, 1000);
})