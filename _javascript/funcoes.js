function mudarFoto(foto){
	document.getElementById("icone").src = foto;
}

function calcTotal(){
	var qtd = parseInt(document.getElementById('qtdInput').value);
	var total = qtd * 6993.56; 

	document.getElementById('precoInput').value = total;
}

function enviarMsg(){
	var nome = document.getElementById('nomeInput').value;

	if(nome != ""){
		alert("Obrigado, Sr(a) "+ nome + "! Em breve entraremos em contato.");
	}
}
