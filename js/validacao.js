function validaForm(event){
	event.preventDefault();
	console.log("evento ok");
	
	var span_nome = document.querySelector("#erro-nome");
	var span_email = document.querySelector("#erro-email");
	var span_empresa = document.querySelector("#erro-empresa");	

	var nome = document.querySelector("#nome");
	var email = document.querySelector("#email");
	var empresa = document.querySelector("#empresa");
	if(nome.value==""){
		span_nome.textContent = "Por favor digite o seu nome Completo";
		nome.focus();
		
	}else{
		span_nome.textContent = "";
	}

	if(email.value == ""){
		span_email.textContent = "Por favor digite o seu email";
		email.focus();
		
	}else{
		span_email.textContent="";	
	}
	
	if(empresa.value=="")	{
		span_empresa.textContent = "Por favor digite o nome da empresa";
		email.focus();
		
	}else{
		span_empresa.textContent="";
	}
	
		
		
		
	

	
}
