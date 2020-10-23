var contador=[];
var contador2=[];
var arrayUno=[];
var arrayDos=[];
for(var j=0;j<=35;j++)
	contador[j]=0;
document.write("<div><table> <tr><th>Dado 1</th><th>Dado 2</th><th>Suma</th></tr>");
for(var i=0; i<36; i++){
	arrayDos[0]=Math.floor((Math.random()*6)+1);
	arrayDos[1]=Math.floor((Math.random()*6)+1);
	arrayUno[i]=arrayDos;
	
	switch(arrayUno[i][0]){
		case 1:switch(arrayUno[i][1]){
			case 1:contador[0]++;break;
			case 2:contador[1]++;break;
			case 3:contador[2]++;break;
			case 4:contador[3]++;break;
			case 5:contador[4]++;break;
			case 6:contador[5]++;

		};break;
		case 2:switch(arrayUno[i][1]){
			case 1:contador[6]++;break;
			case 2:contador[7]++;break;
			case 3:contador[8]++;break;
			case 4:contador[9]++;break;
			case 5:contador[10]++;break;
			case 6:contador[11]++;

		};break;
		case 3:switch(arrayUno[i][1]){
			case 1:contador[12]++;break;
			case 2:contador[13]++;break;
			case 3:contador[14]++;break;
			case 4:contador[15]++;break;
			case 5:contador[16]++;break;
			case 6:contador[17]++;
		};break;
		case 4:switch(arrayUno[i][1]){
			case 1:contador[18]++;break;
			case 2:contador[19]++;break;
			case 3:contador[20]++;break;
			case 4:contador[21]++;break;
			case 5:contador[22]++;break;
			case 6:contador[23]++;
		};break;
		case 5:switch(arrayUno[i][1]){
			case 1:contador[24]++;break;
			case 2:contador[25]++;break;
			case 3:contador[26]++;break;
			case 4:contador[27]++;break;
			case 5:contador[28]++;break;
			case 6:contador[29]++;
		};break;
		case 6:switch(arrayUno[i][1]){
			case 1:contador[30]++;break;
			case 2:contador[31]++;break;
			case 3:contador[32]++;break;
			case 4:contador[33]++;break;
			case 5:contador[34]++;break;
			case 6:contador[35]++;}
	}
	
	document.write("<tr><td>"+arrayUno[i][0]+"</td> <td>"+arrayUno[i][1]+"</td> <td>"+(arrayUno[i][0]- -arrayUno[i][1])+"</td> </tr>");
}
document.write("</table></div> <div><table><tr><th><b>Combinaciones<b></th><th><b>Repeticiones<b></th></tr>");
var contemos=0;
for(var p=1;p<=6;p++){
	for(var g=1;g<=6;g++){
		document.write("<tr><td>"+p+" - "+g+"</td><td>"+contador[contemos]+"</td></tr>");
		contemos++;
	}
}
document.write("</table></div>");