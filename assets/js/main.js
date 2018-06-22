
/*Navegación*/
	function displaySection(navegar){

		var sections = new Array(3);
		sections[0] = "home";
		sections[1] = "portafolio";
		sections[2] = "nosotros";
		sections[3] = "contacto";

		var search;
		var show;

		var boton1 = "boton1";
		var boton2 = "boton2";

		for(var i=0; i<4; i++){
			search = document.getElementById(sections[i]);
			show = search.style.display;
			trans = search.style.height;

			if(show == "block"){
				search.style.display = "none";
				if(navegar == "adelante"){
					i++;
					if(i>3)
						i = 0;
				}
				else if(navegar == "atras"){
					i--;
					if(i<0)
						i = 3;
				}

				search = document.getElementById(sections[i]);
				search.style.display = "block";
				search.style.height = "100%";

				break;
			}
		}
	}


/*Ocultar videos home*//*
$('#video-home').delay(1000).fadeOut();
$('#video-home2').delay(1000).fadeOut();
*/
