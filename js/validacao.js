function validaForm(event){
	event.preventDefault();
	
	var span_nome = document.querySelector("#erro-nome");
	var span_email = document.querySelector("#erro-email");
	var span_empresa = document.querySelector("#erro-empresa");	

	

	var nome = document.querySelector("#nome");
	var email = document.querySelector("#email");
	var empresa = document.querySelector("#empresa");

	var nomeValido=validaDados(nome,span_nome);
	var emailValido=validaDados(email,span_email);
	var empresaValida=validaDados(empresa,span_empresa);

	var jsonDadosValidados={
		nome : nomeValido,
		email : emailValido,
		empresa : empresaValida
	}



	enviaDados(JSON.stringify(jsonDadosValidados));
		
	
}


function enviaDados(dadosForm){
	function reqListener () {
  		console.log(this.responseText);
	};

	let httpRequest = new XMLHttpRequest();

	let url = "https://gama-experience12.firebaseio.com/visitante.json"; 
	httpRequest.onload = reqListener;
	httpRequest.open("post", url, true);
	httpRequest.setRequestHeader("Content-Type", "application/json");
	httpRequest.send(dadosForm);
}

function validaDados(elemento,span){

		if(elemento.value=="" ||
			(elemento.id=="email" && !elemento.value.test(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
			|| (elemento.id=="nome" && elemento.value.split(" ").length<2) ){
			
			if(elemento.id=="nome"){
				span.textContent =`Por favor digite o seu ${elemento.id} Completo`;
			}else
			if (elemento.id=="email") {
				span.textContent =`Por favor digite um ${elemento.id} válido`;
			}else{
				span.textContent =`Por favor digite o nome da ${elemento.id} onde trabalha`;
			}
			elemento.focus();
			return false;
		
		}else{

			span.textContent = "";
			return elemento.value;
		}

}
