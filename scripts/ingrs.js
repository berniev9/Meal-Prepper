let params = (new URL(document.location)).searchParams;
var user = params.get("user");
var ingredients = params.get("ingredients");
var restrictions = params.get("restrictions");

var click_ingrs = document.getElementsByClassName("click_ingr");
var ingrs = document.getElementsByClassName("ingredients-name");
for (var i = 0; i < click_ingrs.length; i++) {
  let cur = ingrs[i];
  let cur_button = click_ingrs[i];
  if (ingredients.includes(cur.innerHTML.toLowerCase())) {
    cur_button.style.border = "3px solid white";
  }
  else {
    cur_button.style.border = "";
  }
  click_ingrs[i].onclick = function(){
    if (cur_button.style.border == "") {
      cur_button.style.border = "3px solid white";
      if (ingredients != "") {
        ingredients = ingredients + "," + cur.innerHTML.toLowerCase();
      } else {
        ingredients = ingredients + cur.innerHTML.toLowerCase();
      }
    }
    else {
      cur_button.style.border = "";
      ingredients = ingredients.replace(cur.innerHTML.toLowerCase() + ",", "");
      ingredients = ingredients.replace(cur.innerHTML.toLowerCase(), "");
    }
  };
}

document.getElementById("menu").onclick = function(){
  location.href = "input.html?user=" + user + "&ingredients=" + ingredients + "&restrictions=" + restrictions;
};


var select = document.getElementById("select-all");
if (ingredients.includes("all")) {
  select.style.border = "3px solid white";
}
else {
  select.style.border = "";
}
select.onclick = function(){
  if (select.style.border == "") {
    if (ingredients != "") {
      ingredients = ingredients + ",all";
    } else {
      ingredients = ingredients + "all";
    }
    for (var i = 0; i < click_ingrs.length; i++) {
        select.style.border = "3px solid white";
        click_ingrs[i].style.border = "3px solid white";
        if (!ingredients.includes(ingrs[i].innerHTML.toLowerCase())){
          if (ingredients != "") {
            ingredients = ingredients + "," + ingrs[i].innerHTML.toLowerCase();
          } else {
            ingredients = ingredients + ingrs[i].innerHTML.toLowerCase();
          }
        }
    }
  }
  else {
    ingredients = ingredients.replace("all,", "");
    ingredients = ingredients.replace("all", "");
    for (var i = 0; i < click_ingrs.length; i++) {
      select.style.border = "";
      click_ingrs[i].style.border = "";
      ingredients = ingredients.replace(ingrs[i].innerHTML.toLowerCase() + ",", "");
      ingredients = ingredients.replace(ingrs[i].innerHTML.toLowerCase(), "");
    }
  }
};
