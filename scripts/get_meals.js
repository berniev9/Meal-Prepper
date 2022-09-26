
// get_meals(ingredients, restrictions) will return a list of 21 meals
// based on given ingredients minus restrictions
// if there aren't enough meals, the site will have a placeholder
// saying something like MEAL NOT FOUND go grocery shopping
// possible (simple) algorithm? : iterate through json obj of meals
// (maybe by meal type: breakfast,lunch,dinner)
// and if the meal has all ingredients and none of the restrictions
// add to final list of meals to return
// not very efficient but simple solution for now

// ingredients,restrictions : list of strings
function get_meals(ingredients, restrictions) {
  var includeMeal = true;

  // BREAKFAST MEALS
  var breakfast_meals = [];

  var xmlhttpb = new XMLHttpRequest();
  xmlhttpb.onreadystatechange = function() {
    if (xmlhttpb.readyState == XMLHttpRequest.DONE) {
        if (xmlhttpb.status == 200) {
            var breakfast_meal_bank = JSON.parse(xmlhttpb.responseText);
            // console.log(breakfast_meal_bank);
            var breakfast = {};
            for (var meal in breakfast_meal_bank) {
              breakfast[meal] = breakfast_meal_bank[meal]["ingredients"];
            }
            // console.log(breakfast);
            for (var meal in breakfast) {
              includeMeal = true;

              for (ingredient of breakfast[meal]) {
                if (! ingredients.includes(ingredient)) {
                  includeMeal = false;
                } // endif
                if (restrictions.includes(ingredient)) {
                  includeMeal = false;
                } // endif
              } // endfor
              // console.log("INCLUDE " + meal + "?: " + includeMeal);
              if (includeMeal) {
                breakfast_meals.push(meal);
              } // endif

            } // endfor
            console.log("BREAKFAST MEALS: " + breakfast_meals);
            var num = 1;
            for (var meal in breakfast_meals) {
              // console.log(breakfast_meal_bank[breakfast_meals[meal]]["icon"]);
              if (num <= 7) {
                var img = document.createElement("img");
                img.src = breakfast_meal_bank[breakfast_meals[meal]]["icon"];
                var divName = "b-meal-pic-" + num;
                document.getElementById(divName).appendChild(img);
                divName = "b-details-" + num;
                var a = document.createElement("a");
                a.setAttribute('href', breakfast_meal_bank[breakfast_meals[meal]]["recipe"]);
                a.innerHTML = "RECIPE";
                document.getElementById(divName).innerHTML = breakfast_meals[meal].toUpperCase() + "<br>" + breakfast_meal_bank[breakfast_meals[meal]]["calories"] + " CALORIES<br>COOK TIME " + breakfast_meal_bank[breakfast_meals[meal]]["cook time"] + " MINS<br>"
                document.getElementById(divName).appendChild(a);
                num += 1;
              } // endif
            } // endfor
            for (var i = num; i <= 7; ++i) {
              var img = document.createElement("img");
              img.src = "src/shopping-cart.png";
              var divName = "b-meal-pic-" + i;
              document.getElementById(divName).appendChild(img);
              // document.getElementById(divName).style.visibility = 'hidden';
              divName = "b-details-" + i;
              document.getElementById(divName).innerHTML = "NO MORE MEALS FOUND<br>GO GROCERY SHOPPING<br><br><br>";
            }
        } // endif
    } // endif
  }; // end xml
  xmlhttpb.open("GET", "src/breakfast.json", true);
  xmlhttpb.send();

  // LUNCH MEALS
  var lunch_meals = [];

  var xmlhttpl = new XMLHttpRequest();
  xmlhttpl.onreadystatechange = function() {
    if (xmlhttpl.readyState == XMLHttpRequest.DONE) {
        if (xmlhttpl.status == 200) {
            var lunch_meal_bank = JSON.parse(xmlhttpl.responseText);

            var lunch = {};
            for (var meal in lunch_meal_bank) {
              lunch[meal] = lunch_meal_bank[meal]["ingredients"];
            }

            for (var meal in lunch) {
              includeMeal = true;

              for (ingredient of lunch[meal]) {
                if (! ingredients.includes(ingredient)) {
                  includeMeal = false;
                } // endif
                if (restrictions.includes(ingredient)) {
                  includeMeal = false;
                } // endif
              } // endfor
              // console.log("INCLUDE " + meal + "?: " + includeMeal);
              if (includeMeal) {
                lunch_meals.push(meal);
              } // endif

            } // endfor
            console.log("LUNCH MEALS: " + lunch_meals);
            var num = 1;
            for (var meal in lunch_meals) {

              if (num <= 7) {
                var img = document.createElement("img");
                img.src = lunch_meal_bank[lunch_meals[meal]]["icon"];
                var divName = "l-meal-pic-" + num;
                document.getElementById(divName).appendChild(img);
                divName = "l-details-" + num;
                var a = document.createElement("a");
                a.setAttribute('href', lunch_meal_bank[lunch_meals[meal]]["recipe"]);
                a.innerHTML = "RECIPE";
                document.getElementById(divName).innerHTML = lunch_meals[meal].toUpperCase() + "<br>" + lunch_meal_bank[lunch_meals[meal]]["calories"] + " CALORIES<br>COOK TIME " + lunch_meal_bank[lunch_meals[meal]]["cook time"] + " MINS<br>"
                document.getElementById(divName).appendChild(a);
                num += 1;
              } // endif
            } // endfor
            for (var i = num; i <= 7; ++i) {
              var img = document.createElement("img");
              img.src = "src/shopping-cart.png";
              var divName = "l-meal-pic-" + i;
              document.getElementById(divName).appendChild(img);
              // document.getElementById(divName).style.visibility = 'hidden';
              divName = "l-details-" + i;
              document.getElementById(divName).innerHTML = "NO MORE MEALS FOUND<br>GO GROCERY SHOPPING<br><br><br>";
            }
        } // endif
    } // endif
  }; // end xml
  xmlhttpl.open("GET", "src/lunch.json", true);
  xmlhttpl.send();

  // DINNER MEALS
  var dinner_meals = [];

  var xmlhttpd = new XMLHttpRequest();
  xmlhttpd.onreadystatechange = function() {
    if (xmlhttpd.readyState == XMLHttpRequest.DONE) {
        if (xmlhttpd.status == 200) {
            var dinner_meal_bank = JSON.parse(xmlhttpd.responseText);

            console.log(dinner_meal_bank);

            var dinner = {};
            for (var meal in dinner_meal_bank) {
              dinner[meal] = dinner_meal_bank[meal]["ingredients"];
            }

            for (var meal in dinner) {
              includeMeal = true;

              for (ingredient of dinner[meal]) {
                if (! ingredients.includes(ingredient)) {
                  includeMeal = false;
                } // endif
                if (restrictions.includes(ingredient)) {
                  includeMeal = false;
                } // endif
              } // endfor
              // console.log("INCLUDE " + meal + "?: " + includeMeal);
              if (includeMeal) {
                dinner_meals.push(meal);
              } // endif

            } // endfor
            console.log("DINNER MEALS: " + dinner_meals);
            var num = 1;
            for (var meal in dinner_meals) {

              if (num <= 7) {
                var img = document.createElement("img");
                img.src = dinner_meal_bank[dinner_meals[meal]]["icon"];
                var divName = "d-meal-pic-" + num;
                document.getElementById(divName).appendChild(img);
                divName = "d-details-" + num;
                var a = document.createElement("a");
                a.setAttribute('href', dinner_meal_bank[dinner_meals[meal]]["recipe"]);
                a.innerHTML = "RECIPE";
                document.getElementById(divName).innerHTML = dinner_meals[meal].toUpperCase() + "<br>" + dinner_meal_bank[dinner_meals[meal]]["calories"] + " CALORIES<br>COOK TIME " + dinner_meal_bank[dinner_meals[meal]]["cook time"] + " MINS<br>"
                document.getElementById(divName).appendChild(a);
                num += 1;
              } // endif
            } // endfor
            for (var i = num; i <= 7; ++i) {
              var img = document.createElement("img");
              img.src = "src/shopping-cart.png";
              var divName = "d-meal-pic-" + i;
              document.getElementById(divName).appendChild(img);
              // document.getElementById(divName).style.visibility = 'hidden';
              divName = "d-details-" + i;
              document.getElementById(divName).innerHTML = "NO MORE MEALS FOUND<br>GO GROCERY SHOPPING<br><br><br>";
            }
        } // endif
    } // endif
  }; // end xml
  xmlhttpd.open("GET", "src/dinner.json", true);
  xmlhttpd.send();

}
