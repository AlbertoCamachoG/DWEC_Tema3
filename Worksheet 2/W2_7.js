function initialize(array){
	return array.map((el,index)=>{if(index<10) return 0;});
}
function addOne(array){
	return array.map((el)=>{if(index<10) return el+1;});
}
function write(array){
	for(var i=0;i<array.length-1;i++)
		document.write(array[i]+" ");
	document.write(array[array.length-1]+"<br>");
}