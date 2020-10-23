function lanzamiento(){
	var numArray= [0, 0, 0, 0, 0, 0];
	var num;
	for(var i=0;i<=6000;i++){
		num= Math.floor((Math.random()*6)+1);
		switch(num){
			case 1:numArray[0]++;break;
			case 2:numArray[1]++;break;
			case 3:numArray[2]++;break;
			case 4:numArray[3]++;break;
			case 5:numArray[4]++;break;
			case 6:numArray[5]++;break;
		}
	}
	return ("1: "+numArray[0]+" 2: "+numArray[1]+" 3: "+numArray[2]+" 4: "+numArray[3]+" 5: "+numArray[4]+" 6: "+numArray[5]);
}