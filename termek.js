import { ADATLISTA } from "./adat.js";
class Termekek {
    constructor(){
         {
			let tabla = $("<table class='table-bordered'></table>");
			let fejlec = $("<tr><th>nev</th><th>kor</th><th>pic</th></tr>");
			tabla.append(fejlec);

			$.each(ADATLISTA, function(item) {
				let sor = $("<tr></tr>");
				let nevCella = $("<td></td>").text(item.nev);
				let korCella = $("<td></td>").text(item.kor + " Ft");
				let kepCella = $("<td></td>").append($("<img>").attr("src", item.kep));
				tabla.append(sor);
                sor.append(nevCella, korCella, kepCella);
			});
		};
    }
}
