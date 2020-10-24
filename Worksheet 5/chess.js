/*Esta clase se encarga de controlar el tablero, el numero de piezas y el ganador*/
class Game{
    constructor(){
        this.tablero=Array(63);
    }
    /*Ubica todas las piezas en el tablero*/
    inicializar() {
        for(var i=0;i<=63;i++){
            this.tablero[i]=[];
        }
        this.tablero[0]=new Torre("NTorre1");
        this.tablero[1]=new Caballo("NCaballo1");
        this.tablero[2]=new Alfil("NAlfil1");
        this.tablero[3]=new Reina("NReina");
        this.tablero[4]=new Rey("NRey");
        this.tablero[5]=new Alfil("NAlfil2");
        this.tablero[6]=new Caballo("NCaballo2");
        this.tablero[7]=new Torre("NTorre2");
        this.tablero[8]=new Peon("NPeon1");
        this.tablero[9]=new Peon("NPeon2");
        this.tablero[10]=new Peon("NPeon3");
        this.tablero[11]=new Peon("NPeon4");
        this.tablero[12]=new Peon("NPeon5");
        this.tablero[13]=new Peon("NPeon6");
        this.tablero[14]=new Peon("NPeon7");
        this.tablero[15]=new Peon("NPeon8");

        this.tablero[63]=new Torre("BTorre2");
        this.tablero[62]=new Caballo("BCaballo2");
        this.tablero[61]=new Alfil("BAlfil2");
        this.tablero[59]=new Reina("BReina");
        this.tablero[60]=new Rey("BRey");
        this.tablero[58]=new Alfil("BAlfil1");
        this.tablero[57]=new Caballo("BCaballo1");
        this.tablero[56]=new Torre("BTorre1");
        this.tablero[55]=new Peon("BPeon8");
        this.tablero[54]=new Peon("BPeon7");
        this.tablero[53]=new Peon("BPeon6");
        this.tablero[52]=new Peon("BPeon5");
        this.tablero[51]=new Peon("BPeon4");
        this.tablero[50]=new Peon("BPeon3");
        this.tablero[49]=new Peon("BPeon2");
        this.tablero[48]=new Peon("BPeon1");
    }
    /*Imprime el tablero y me da los objetos por consola*/
    mostrarTablero(){
        console.clear();
        var tbl = document.getElementById("mytable");
        if(tbl) tbl.remove();
        document.write("<table style='border: solid; border-collapse:collapse; text-align:center' id='mytable'>");
        var pos=0;
        var color;
        for(var i=0;i<=7;i++){
            document.write("<tr>");
            for(var j=0;j<=7;j++){
                console.log(this.tablero[pos]);
                if(this.tablero[pos]!=""){
                    if(this.tablero[pos].name.charAt(0)=='N'){color='orange'};
                    if(this.tablero[pos].name.charAt(0)=='B'){color='#bbeddf'};
                    document.write("<td style='border:solid 1px;padding:5px;background-color:"+color+"'><b>"+this.tablero[pos].name+"</b></td>");
                }else{
                    document.write("<td style='border:solid 1px;padding:5px; background-color:beige; '>---</td>");
                }
                pos++;
            }
            document.write("</tr>");
            console.log(" ");
        }
        document.write("</table>");
    }

    moverPeonNegro(num){
        var nombre='NPeon'+num;
        var pos=getPiece(nombre);
        var aux=tab.tablero[pos];
        console.log(tab.tablero[pos+8]);
        if(tab.tablero[pos+8]==""){
            tab.tablero[pos]=[];
            tab.tablero[pos+8]=aux;
            this.mostrarTablero();
        }else{console.log('no fufa')}
    }
    moverPeonBlanco(num){
        var nombre='BPeon'+num;
        var pos=getPiece(nombre);
        var aux=tab.tablero[pos];
        if(tab.tablero[pos-8]==""){
            tab.tablero[pos]=[];
            tab.tablero[pos-8]=aux;
            this.mostrarTablero();
        }else{console.log('no fufa')}
    }
    moverAlfilBlanco(num,direccion,pasos){
        var nombre='BAlfil'+num;
        for(var i=0;i<pasos;i++){
            var pos=getPiece(nombre);
            var aux=tab.tablero[pos];
                try{
                switch (direccion){
                    case 'arribaI':if(tab.tablero[pos-9]=="" && pos!=0 && pos!=8 && pos!=16 && pos!=24 && pos!=32 && pos!=40 && pos!=48){
                        tab.tablero[pos-9]=aux;
                        tab.tablero[pos]=[];
                        this.mostrarTablero();
                    }else{
                        if(tab.tablero[pos-9].name.charAt(0)=='N' && pos!=0 && pos!=8 && pos!=16 && pos!=24 && pos!=32 && pos!=40 && pos!=48){
                            tab.tablero[pos-9]=aux;
                            tab.tablero[pos]=[];
                            tab.NPNegras--;
                            this.mostrarTablero();
                            i=pasos;
                            break;
                        }else{console.log("No puedes realizar ese movimiento")}
                    };break;
                    case 'arribaD':if(tab.tablero[pos-7]=="" && pos!=7 && pos!=15 && pos!=23 && pos!=31 && pos!=39 && pos!=47 && pos!=55){
                        tab.tablero[pos-7]=aux;
                        tab.tablero[pos]=[];
                        this.mostrarTablero();
                    }else{
                        if(tab.tablero[pos-7].name.charAt(0)=='N' && pos!=7 && pos!=15 && pos!=23 && pos!=31 && pos!=39 && pos!=47 && pos!=55){
                            tab.tablero[pos-7]=aux;
                            tab.tablero[pos]=[];
                            tab.NPNegras--;
                            this.mostrarTablero();
                            i=pasos;
                            break;
                        }
                    };break;
                    case 'abajoI':if(tab.tablero[pos+7]=="" && pos!=0 && pos!=8 && pos!=16 && pos!=24 && pos!=32 && pos!=40 && pos!=48){
                        tab.tablero[pos+7]=aux;
                        tab.tablero[pos]=[];
                        this.mostrarTablero();
                    }else{
                        if(tab.tablero[pos+7].name.charAt(0)=='N' && pos!=0 && pos!=8 && pos!=16 && pos!=24 && pos!=32 && pos!=40 && pos!=48){
                            tab.tablero[pos+7]=aux;
                            tab.tablero[pos]=[];
                            tab.NPNegras--;
                            this.mostrarTablero();
                            i=pasos;
                            break;
                        }else{console.log("No puedes realizar ese movimiento")}
                    };break;
                    case 'abajoD':if(tab.tablero[pos+7]=="" && pos!=7 && pos!=15 && pos!=23 && pos!=31 && pos!=39 && pos!=47 && pos!=55){
                        tab.tablero[pos+9]=aux;
                        tab.tablero[pos]=[];
                        this.mostrarTablero();
                    }else{
                        if(tab.tablero[pos+9].name.charAt(0)=='N' && pos!=7 && pos!=15 && pos!=23 && pos!=31 && pos!=39 && pos!=47 && pos!=55){
                            tab.tablero[pos+9]=aux;
                            tab.tablero[pos]=[];
                            tab.NPNegras--;
                            this.mostrarTablero();
                            i=pasos;
                            break;
                        }else{console.log("No puedes realizar ese movimiento")}
                    };
                }
            }catch(error){console.log("No se puede realizar el movimiento");}
        }
    }

    moverAlfilNegro(num,direccion,pasos){
        var nombre='NAlfil'+num;
        for(var i=0;i<pasos;i++){
            var pos=getPiece(nombre);
            var aux=tab.tablero[pos];
                try{
                switch (direccion){
                    case 'arribaI':if(tab.tablero[pos-9]=="" && pos!=0 && pos!=8 && pos!=16 && pos!=24 && pos!=32 && pos!=40 && pos!=48){
                        tab.tablero[pos-9]=aux;
                        tab.tablero[pos]=[];
                        this.mostrarTablero();
                    }else{
                        if(tab.tablero[pos-9].name.charAt(0)=='B' && pos!=0 && pos!=8 && pos!=16 && pos!=24 && pos!=32 && pos!=40 && pos!=48){
                            tab.tablero[pos-9]=aux;
                            tab.tablero[pos]=[];
                            tab.NPNegras--;
                            this.mostrarTablero();
                            i=pasos;
                            break;
                        }else{console.log("No puedes realizar ese movimiento")}
                    };break;
                    case 'arribaD':if(tab.tablero[pos-7]=="" && pos!=7 && pos!=15 && pos!=23 && pos!=31 && pos!=39 && pos!=47 && pos!=55){
                        tab.tablero[pos-7]=aux;
                        tab.tablero[pos]=[];
                        this.mostrarTablero();
                    }else{
                        if(tab.tablero[pos-7].name.charAt(0)=='B' && pos!=7 && pos!=15 && pos!=23 && pos!=31 && pos!=39 && pos!=47 && pos!=55){
                            tab.tablero[pos-7]=aux;
                            tab.tablero[pos]=[];
                            tab.NPNegras--;
                            this.mostrarTablero();
                            i=pasos;
                            break;
                        }
                    };break;
                    case 'abajoI':if(tab.tablero[pos+7]=="" && pos!=0 && pos!=8 && pos!=16 && pos!=24 && pos!=32 && pos!=40 && pos!=48){
                        tab.tablero[pos+7]=aux;
                        tab.tablero[pos]=[];
                        this.mostrarTablero();
                    }else{
                        if(tab.tablero[pos+7].name.charAt(0)=='B' && pos!=0 && pos!=8 && pos!=16 && pos!=24 && pos!=32 && pos!=40 && pos!=48){
                            tab.tablero[pos+7]=aux;
                            tab.tablero[pos]=[];
                            tab.NPNegras--;
                            this.mostrarTablero();
                            i=pasos;
                            break;
                        }else{console.log("No puedes realizar ese movimiento")}
                    };break;
                    case 'abajoD':if(tab.tablero[pos+7]=="" && pos!=7 && pos!=15 && pos!=23 && pos!=31 && pos!=39 && pos!=47 && pos!=55){
                        tab.tablero[pos+9]=aux;
                        tab.tablero[pos]=[];
                        this.mostrarTablero();
                    }else{
                        if(tab.tablero[pos+9].name.charAt(0)=='B' && pos!=7 && pos!=15 && pos!=23 && pos!=31 && pos!=39 && pos!=47 && pos!=55){
                            tab.tablero[pos+9]=aux;
                            tab.tablero[pos]=[];
                            tab.NPNegras--;
                            this.mostrarTablero();
                            i=pasos;
                            break;
                        }else{console.log("No puedes realizar ese movimiento")}
                    };
                }
            }catch(error){console.log("No se puede realizar el movimiento");}
        }
    }
    ganador;
    NPNegras=16;
    NPBlancas=16;

}
/*Controla los jugadores*/
class Player{
    constructor(equipo){
        this.equipo=equipo;
    }

}

/*Encuentra la pieza con ese nombre*/
function getPiece(nombre){
    for(var i=0;i<tab.tablero.length;i++){
        if(tab.tablero[i].name==nombre){
            return i;
        }
    }
}

class Peon{
    constructor(name){
        this.name=name;
    }
}

class Rey{
    constructor(name){
        this.name=name;
    }
}

class Reina{
    constructor(name){
        this.name=name;
    }
}

class Torre{
    constructor(name){
        this.name=name;
    }
}

class Alfil{
    constructor(name){
        this.name=name;
    }
}

class Caballo{
    constructor(name){
        this.name=name;
    }
}

tab=new Game();
tab.inicializar();
tab.mostrarTablero();