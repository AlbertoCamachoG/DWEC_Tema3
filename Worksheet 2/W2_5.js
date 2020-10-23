var par=[];
var impar=[];
function parF(num, i){
	if(num%2==0){
		par.push(num);
	}else{impar.push(num);}
}

function paresImpares(){
	for(var i=0;i<=100;i++){
		parF(Math.floor((Math.random()*1000)+1),i);
	}
	document.write("PARES:");
	write(par);
	document.write("----------------------------- <br>")
	document.write("IMPARES:");
	write(impar);
}
function write(array){
	for(var i=0;i<array.length-1;i++)
		document.write(array[i]+" - ")
		document.write(array[array.length-1]+"<br>");
}