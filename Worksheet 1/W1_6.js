/*function potencia(cont,num,pot){
	if(pot==1){
		document.write(cont+"<br>");
	}else{
		cont*=num;
		potencia(cont,num,pot-1);
	}
}*/

function potencia(num,pot){
	if(pot==1){
		return num;
	}else{
		return num * potencia(num,pot-1);
	}
}