

$(document).ready( function() {
  let params = (new URL(document.location)).searchParams;
  if (params.get("user")) {
    document.getElementById("user_name").value = params.get("user");
  }
  if (params.get("ingredients")) {
    var ingredients = params.get("ingredients");
  } else {
    var ingredients = "";
  }
  if (params.get("restrictions")) {
    var restrictions = params.get("restrictions");
  } else {
    var restrictions = "";
  }
  document.getElementById("generate").onclick = function() {
    location.href = "output.html?user=" + document.getElementById("user_name").value + "&ingredients=" + ingredients + "&restrictions=" + restrictions;
  };

  var x = sessionStorage.getItem("hide_splash_screen");
  if (x == 'false'){
    $("#splash_screen").remove();
  }else{
    document.getElementById('splash_screen').style.opacity = 1;
    document.onclick = function(){
      sessionStorage.setItem("hide_splash_screen", 'false');
      graduallyFadeAndRemoveElement($("#splash_screen"));
    };
  }

  document.getElementById("help_button").onclick = function(){
    location.href = "instructions.html";
  }
  document.onclick = function(){
    sessionStorage.setItem("hide_splash_screen", 'false');
    graduallyFadeAndRemoveElement($("#splash_screen"));
  };


  // Click to navigate ingredient pages
  document.getElementById("protein").onclick = function() {
    location.href = "protein.html?user=" + document.getElementById("user_name").value + "&ingredients=" + ingredients + "&restrictions=" + restrictions;
  };
  document.getElementById("grains").onclick = function() {
    location.href = "grains.html?user=" + document.getElementById("user_name").value + "&ingredients=" + ingredients + "&restrictions=" + restrictions;
  };
  document.getElementById("dairy").onclick = function() {
    location.href = "dairy.html?user=" + document.getElementById("user_name").value + "&ingredients=" + ingredients + "&restrictions=" + restrictions;
  };
  document.getElementById("fruit").onclick = function() {
    location.href = "fruit.html?user=" + document.getElementById("user_name").value + "&ingredients=" + ingredients + "&restrictions=" + restrictions;
  };
  document.getElementById("vege").onclick = function() {
    location.href = "vege.html?user=" + document.getElementById("user_name").value + "&ingredients=" + ingredients + "&restrictions=" + restrictions;
  };

  // Click to navigate restrictions
  document.getElementById("allergy").onclick = function() {
    location.href = "allerg.html?user=" + document.getElementById("user_name").value + "&ingredients=" + ingredients + "&restrictions=" + restrictions;
  };
  document.getElementById("veget").onclick = function() {
    var b = document.getElementById("veget");
    if (b.style.border == "") {
      b.style.border = "3px solid white";
    }
    else {
      b.style.border = "";
    }
  };
  document.getElementById("vegan").onclick = function() {
    var b = document.getElementById("vegan");
    if (b.style.border == "") {
      b.style.border = "3px solid white";
    }
    else {
      b.style.border = "";
    }
  };
  document.getElementById("free").onclick = function() {
    var b = document.getElementById("free");
    if (b.style.border == "") {
      b.style.border = "3px solid white";
    }
    else {
      b.style.border = "";
    }
  };
  document.getElementById("lac").onclick = function() {
    var b = document.getElementById("lac");
    if (b.style.border == "") {
      b.style.border = "3px solid white";
    }
    else {
      b.style.border = "";
    }
  };

  // Click to navigate to "About Us" page
  document.getElementById("aboutUs").onclick = function () {
    location.href = "about.html";
  };
});



function graduallyFadeAndRemoveElement(elementObj){
  // Fade to 0 opacity over 2 seconds
  elementObj.fadeTo(2000, 0, function(){
    $(this).remove();
  });
}
