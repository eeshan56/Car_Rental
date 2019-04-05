function openTab(event, tabName) {
	var i, tablinks, tabcontent;

	tabcontent = document.getElementByClassName("tabcontent");

	for(i = 0; i < tabcontent.length; i ++)
		tabcontent[i].style.display = "none";

	tablinks = document.getElementByClassName("tablinks");
	for (i = 0; i < tablinks.length; i ++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	event.currentTarget.className += " active";
}