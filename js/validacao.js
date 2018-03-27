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

	let url = "https://my-json-server.typicode.com/typicode/demo/posts"; 
	httpRequest.onload = reqListener;
	httpRequest.open("post", url, true);
	httpRequest.setRequestHeader("Content-Type", "application/json");
	httpRequest.send(dadosForm);
}

function validaDados(elemento,span){
	
	

	
		if(elemento.value==""){
		span.textContent =`Por favor digite o seu ${elemento.id} Completo`;
		nome.focus();
		return false;
		
	}else{

		span.textContent = "";
		return elemento.value;
	}

}
