function envoyer() {
	alert("Message envoy\u00e9. Merci pour votre contribution !")
}

function top() {
	location.reload();
}


/********************* QUIZ *****************/

var current_index = 0 ;
 
var questionnaire = new Array();
 
 
questionnaire[0] = new Array();
questionnaire[0][0] = "A quelle période est né Descartes ?";
questionnaire[0][1] = new Array("Vers 1500","Vers 1550","Vers 1600","Après 1700");
questionnaire[0][2] = "Vers 1600";
 
 
questionnaire[1] = new Array();
questionnaire[1][0] = "Sur lequel des sujets suivants Descartes n'a-t-il pas fait d'avancée majeure ?";
questionnaire[1][1] = new Array("Optique","Chimie","M&eacute;canique","G&eacute;om&eacute;trie analytique");
questionnaire[1][2] = "Chimie";
 
 
questionnaire[2] = new Array();
questionnaire[2][0] = "Quelle oeuvre n'a pas été écrite par Descartes ?";
questionnaire[2][1] = new Array("Le Monde","La Notion d&rsquo;Esprit","Traité de Mécanique","Discours de la Méthode");
questionnaire[2][2] = "La Notion d&rsquo;Esprit";

questionnaire[3] = new Array();
questionnaire[3][0] = "Selon Descartes, le corps et l'esprit sont une seule et même substance :";
questionnaire[3][1] = new Array("Vrai","Faux");
questionnaire[3][2] = "Faux";

questionnaire[4] = new Array();
questionnaire[4][0] = "Quel lieu peut-être lieu de certitudes ?";
questionnaire[4][1] = new Array("Le corps","L&rsquo;Esprit","Les deux","Aucun des deux");
questionnaire[4][2] = "L&rsquo;Esprit";

/******/
 
function compare(a,b,index,score){
	var newindex=index+1;
	var message = " ";
	if (index==0) {
		message = "Descartes est né le 31 mars 1596 à La Haye-en-Touraine et est mort en 1650 à Stockholm.";
	}
	else if (index==1) {
		message = "Descartes a bien travaillé dans le domaine de l'optique, de la mécanique et de la géométrie analytique, mais pas de la chimie.";
	}
	else if (index==2) {
		message = "La Notion d'Esprit a été écrite par Gylbert Ryle et est commentée à la lumière de la Méditation seconde dans la partie Analyse.";
	}
	else if (index==3) {
		message = "Selon Descartes, le corps et l'esprit sont deux substances distinctes."
	}
	else if (index==4) {
		message = "Seul l'esprit peut être lieu de certitudes, car tous nos sens et nos perceptions nous trompent. Seul l'entendement peut nous permettre d'accéder à la connaissance."
	}
	if (a == b){
		alert("Bonne réponse ! \n" + message);
		score+=1;
	} else {
		if (index==0) {

		}
		alert("Mauvaise réponse ! \n" + message);
	}
 	var string = "score : " + score + "/" + newindex;
 	document.getElementById("score").innerHTML = string;
	if (index+1 == questionnaire.length){
		if (score>2) {
			alert("Fin du questionnaire. Bravo, votre score est de " + score +"/5");
		} else {
			alert("Fin du questionnaire. Encore un peu d'efforts, votre score est de " + score +"/5");
		}
		show_quiz(0,0);
		document.getElementById("score").innerHTML = "";
	} else {
		show_quiz(newindex,score);
	} 
}

function show_quiz(index,score) {
	document.getElementById("question").innerHTML = questionnaire[index][0];
	var reponses = document.getElementById("reponses");
	reponses.innerHTML = "";
	for (var i = 0; i < questionnaire[index][1].length ; i++){
		reponses.innerHTML += "<input id='bouton_reponses' type='button' value='"+questionnaire[index][1][i]+"' onclick=\"compare(\'"+questionnaire[index][1][i]+"\',\'"+questionnaire[index][2]+"\',"+index+","+score+");\" />";
 	}
}

function start_quiz() {
	document.getElementById("quiz").style.display="none";
	show_quiz(0,0);
}


