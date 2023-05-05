import { ADATLISTA } from "./adat.js";
class Termekek {
    constructor(){
        $(document).ready(function() {
			let fejlec = $("<h1>Név</h1><h1>Kor</h1><h1>Képek</h1>");
			tabla.append(fejlec);

		
            $.each(ADATLISTA, function(index, item) {
				
			});

			$("#tarolo").append(tabla);
		});
    }
}

export default Termekek;