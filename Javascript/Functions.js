	
		//Background Color Changing Function
	
	function changeColor(colorParam) {
		let color = colorParam.value.toLowerCase(); //sets the color's text to lowercase
		var optionElement = document.getElementById('rgb'); //Finds document elements with the "rgb" tag
		const paragraphEle = document.getElementsByTagName("P");
		var backColor = document.querySelector(':root');

		for (let i = 0; i < paragraphEle.length; i++) {
			if (color == "black"){
				optionElement.style.background = color; //changes the background	
				paragraphEle[i].style.color = "white";
				backColor.style.setProperty('--imgBackColor', 'white');
			} else {
				optionElement.style.background = color; //changes the background
				paragraphEle[i].style.color = "black";
				backColor.style.setProperty('--imgBackColor', 'black');
			}
		}
	};
		//Used for drop down menu


		/* Loop through all dropdown buttons to toggle between hiding and showing its 
		dropdown content - This allows the user to have multiple dropdowns without any conflict */
		
		var coll = document.getElementsByClassName("collapsible");
		var i;

	for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
		content.style.display = "none";
		} else {
		content.style.display = "block";
		}
	});
	}
	
		//Used for the Dropdown Transition
	
		for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.maxHeight){
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			} 
			});
		}