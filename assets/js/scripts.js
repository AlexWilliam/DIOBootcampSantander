function operacaoNumeros(num1, num2) {

	let string = "";

	if(num1 === num2){
		string += `Os números ${num1} e ${num2} são iguais. `;
	}else{
		string += `Os números ${num1} e ${num2} são diferentes. `;
	}

	let soma = num1 + num2;

	if(soma > 10 && soma < 20){
		string += `A soma dos números ${num1} e ${num2} é ${soma}, que é maior que 10 e menor que 20!`;
	}else if(soma > 10 && soma > 20) {
		string += `A soma dos números ${num1} e ${num2} é ${soma}, que é maior que 10 e maior que 20!`;
	}else{
		string += `A soma dos números ${num1} e ${num2} é ${soma}, que é menor que 10 e menor que 20!`;
	}

	return string+"\r\n";
}


console.log(operacaoNumeros(10, 5));
console.log(operacaoNumeros(8, 8));
console.log(operacaoNumeros(1, 2));
console.log(operacaoNumeros(20, 20));