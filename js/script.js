/* Hides main menu while web-page is loading */
function hide_menu_onload() {
	var menu = document.querySelector("div.header-top nav.main-menu ul");
  var accordion_menu = document.querySelector("nav.accordion-menu");
	menu.classList.add("b-toggle");
  accordion_menu.classList.add("b-toggle");
}

/* Shows/hides main menu */
function toggle() {
	var menu = document.querySelector("div.header-top nav.main-menu ul");
  var accordion_menu = document.querySelector("nav.accordion-menu");

	if (!menu.classList.contains("expanded")) {
		menu.classList.add("expanded");
    accordion_menu.classList.add("expanded");
	} else {
		menu.classList.remove("expanded");
    accordion_menu.classList.remove("expanded");
	}
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if (!Array.from(this.classList).includes("accordion-empty")) {
      this.classList.toggle("active");
    }
    


    // console.log(this);
    // var thisClassList = Array.from(this.classList);
    // console.log(thisClassList);
    // console.log(thisClassList.includes("accordion-empty"));
    // console.log(this.nextElementSibling);
    // console.log(this.parentElement);
    // console.log(this.parentElement.className);
    // console.log(this.parentElement.className == "panel");

    var parent_panel = this.parentElement.className == "panel" ? this.parentElement : null;
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      // console.log("---------------");
    } else {
      // console.log(panel.scrollHeight + "px");
      panel.style.maxHeight = panel.scrollHeight + "px";
      if (parent_panel) {
        parent_panel.style.maxHeight = parent_panel.scrollHeight+panel.scrollHeight + "px";
      }
    } 
  });
}