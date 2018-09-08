

(function($) {
	$.fn.validationEngineLanguage = function() {};
	$.validationEngineLanguage = {
		newLang: function() {
			$.validationEngineLanguage.allRules = 	{"required":{    			// Add your regex rules here, you can take telephone as an example
						"regex":"none",
						"alertText":"* Este campo é obrigatório",
						"alertTextCheckboxMultiple":"* Por favor selecione uma opção",
						"alertTextCheckboxe":"* Este checkbox é obrigatório"},
					"length":{
						"regex":"none",
						"alertText":"*Entre ",
						"alertText2":" e ",
						"alertText3": " caracteres permitidos"},
					"maxCheckbox":{
						"regex":"none",
						"alertText":"* Checks excedidos"},	
					"minCheckbox":{
						"regex":"none",
						"alertText":"* Por favor selecione ",
						"alertText2":" opções"},	
					"confirm":{
						"regex":"none",
						"alertText":"* Seu campo não é compatível"},		
					"telephone":{
						"regex":"/^[0-9\-\(\)\+\ ]+$/",
						"alertText":"* Número inválido"},	
					"email":{
						"regex":"/^[a-zA-Z0-9_\.\+\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/",
						"alertText":"* Email inválido"},	
					"date":{
                         "regex":"/^[0-9]{1,2}\-\[0-9]{1,2}\-\[0-9]{4}$/",
                         "alertText":"* Data inválida, devem estar no formato DD-MM-AAAA"},
					"onlyNumber":{
						"regex":"/^[0-9\ ]+$/",
						"alertText":"* Apenas números"},	
					"noSpecialCaracters":{
						"regex":"/^[0-9a-zA-Z]+$/",
						"alertText":"* Caracteres especiais não são permitidos"},	
					"ajaxUser":{
						"file":"validateUser.php",
						"extraData":"name=eric",
						"alertTextOk":"* Este usuário está disponível",	
						"alertTextLoad":"* Carregando, por favor aguarde",
						"alertText":"* Este usuário já existe"},	
					"ajaxName":{
						"file":"validateUser.php",
						"alertText":"* Este nome já existe",
						"alertTextOk":"* Este nome está disponível",	
						"alertTextLoad":"* Carregando, por favor aguarde"},		
					"onlyLetter":{
						"regex":"/^[a-zA-Z\ \']+$/",
						"alertText":"* Apenas letras"},
					"validate2fields":{
    					"nname":"validate2fields",
    					"alertText":"* Você deve ter um nome próprio e apelido"}	
					}	
					
		}
	}
})(jQuery);

$(document).ready(function() {	
	$.validationEngineLanguage.newLang()
});