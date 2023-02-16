/* Hides main menu while web-page is loading */
function hide_menu_onload() {
	var menu = document.querySelector("div.header-top nav.main-menu ul");
	menu.classList.add("b-toggle");
}

/* Shows/hides main menu */
function toggle() {
	var menu = document.querySelector("div.header-top nav.main-menu ul");

	if (!menu.classList.contains("expanded")) {
		menu.classList.add("expanded");
	} else {
		menu.classList.remove("expanded");
	}
}