
/*Navegación*/
	function displaySection(navegar){

		var sections = new Array(4);
		sections[0] = "home";
		sections[1] = "portafolio";
		sections[2] = "nosotros";
		sections[3] = "extra";
		sections[4] = "contacto";

		var search;
		var show;

		var boton1 = "boton1";
		var boton2 = "boton2";

		for(var i=0; i<5; i++){
			search = document.getElementById(sections[i]);
			show = search.style.display;
			trans = search.style.height;

			if(show == "block"){
				search.style.display = "none";
				if(navegar == "adelante"){
					i++;
					if(i>4)
						i = 0;
				}
				else if(navegar == "atras"){
					i--;
					if(i<0)
						i = 4;
				}

				else if(navegar == "contacto"){
					search = document.getElementById(sections[4]);

				}
				search = document.getElementById(sections[i]);
				search.style.display = "block";
				search.style.height = "100%";

				break;
			}
		}
	}

/*Mostrar contacto*/
	function displayContact(){

		var contact = "contacto";
		var search;
		var show;


		search = document.getElementById(contact);
		show = search.style.display;

		if(show == "none"){
			search = document.getElementById(contact);
			search.style.display = "block";
		}
		else{
			search = document.getElementById(contact);
			search.style.display = "none";
		}

	}

/*Ocultar videos home*/
$('#video-home').hide(12000);
$('#video-home2').hide(12000);

/*TypeWriter*/
var app = document.getElementByClass('titulo-portafolio');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('altered!')
    .start();
