/*Esta clase se encarga de controlar el tablero, el numero de piezas y el ganador*/
class Game{
    constructor(){
        this.tablero=Array(63);
    }
    turno='B'
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
        if(this.turno=='B'){
            console.log('Turno Blanco');
        }
        if(this.turno=='N'){
            console.log('Turno Negro');
        }
        
    }

    ganar(equipo){
        console.clear();
        var tbl = document.getElementById("mytable");
        if(tbl) tbl.remove();
        if(equipo=='B'){
            alert("HA GANADO EL JUGADOR BLANCO");
            location.reload();
        }
        if(equipo=='N'){
            alert("HA GANADO EL JUGADOR NEGRO");
            location.reload();
        }
    }

    deadPiece(pieza){
        try{
            var equipo=pieza.charAt(0);
            var pog=pieza.substr(1);
            switch(pog){
                case 'Torre1':if(equipo=='B'){Blancas.Torre1=false}else{if(equipo=='N'){Negras.Torre1=false}};break;
                case 'Caballo1':if(equipo=='B'){Blancas.Caballo1=false}else{if(equipo=='N'){Negras.Caballo1=false}};break;
                case 'Alfil1':if(equipo=='B'){Blancas.Alfil1=false}else{if(equipo=='N'){Negras.Alfil1=false}};break;
                case 'Reina':if(equipo=='B'){Blancas.Reina=false}else{if(equipo=='N'){Negras.Reina=false}};break;
                case 'Rey':if(equipo=='B'){this.ganar('N')}else{if(equipo=='N'){this.ganar('B')}};break;
                case 'Alfil2':if(equipo=='B'){Blancas.Alfil2=false}else{if(equipo=='N'){Negras.Alfil2=false}};break;
                case 'Caballo2':if(equipo=='B'){Blancas.Caballo2=false}else{if(equipo=='N'){Negras.Caballo2=false}};break;
                case 'Torre2':if(equipo=='B'){Blancas.Torre2=false}else{if(equipo=='N'){Negras.Torre2=false}};break;
                case 'Peon1':if(equipo=='B'){Blancas.Peon1=false}else{if(equipo=='N'){Negras.Peon1=false}};break;
                case 'Peon2':if(equipo=='B'){Blancas.Peon2=false}else{if(equipo=='N'){Negras.Peon2=false}};break;
                case 'Peon3':if(equipo=='B'){Blancas.Peon3=false}else{if(equipo=='N'){Negras.Peon3=false}};break;
                case 'Peon4':if(equipo=='B'){Blancas.Peon4=false}else{if(equipo=='N'){Negras.Peon4=false}};break;
                case 'Peon5':if(equipo=='B'){Blancas.Peon5=false}else{if(equipo=='N'){Negras.Peon5=false}};break;
                case 'Peon6':if(equipo=='B'){Blancas.Peon6=false}else{if(equipo=='N'){Negras.Peon6=false}};break;
                case 'Peon7':if(equipo=='B'){Blancas.Peon7=false}else{if(equipo=='N'){Negras.Peon7=false}};break;
                case 'Peon8':if(equipo=='B'){Blancas.Peon8=false}else{if(equipo=='N'){Negras.Peon8=false}};
            }
        }catch(error){}
    }

    actualizar(pos,num,aux){
        this.deadPiece(tab.tablero[pos+num].name);
        tab.tablero[pos]=[];
        tab.tablero[pos+num]=aux;
        this.mostrarTablero();
    }

    isLeft(pos){
        if(pos!=0 && pos!=8 && pos!=16 && pos!=24 && pos!=32 && pos!=40 && pos!=48 && pos!=56)
            return true;
        return false;
    }

    isLeft1(pos){
        if(pos!=1 && pos!=9 && pos!=17 && pos!=25 && pos!=33 && pos!=41 && pos!=49 && pos!=57)
            return true;
        return false;
    }
    isRight(pos){
        if(pos!=7 && pos!=15 && pos!=23 && pos!=31 && pos!=39 && pos!=47 && pos!=55 && pos!=63)
            return true;
        return false;
    }
    isRight1(pos){
        if(this.pos!=6 && pos!=14 && pos!=22 && pos!=30 && pos!=38 && pos!=46 && pos!=54 && pos!=62)
            return true;
        return false;
    }

    moverPeonNegro(num){
        if(this.turno=='N'){
            var nombre='NPeon'+num;
            var pos=getPiece(nombre);
            var aux=tab.tablero[pos];
            console.log(tab.tablero[pos+8]);
            if(tab.tablero[pos+8]==""){this.turno='B';this.actualizar(pos,+8,aux);}else{console.log('Esa direccion esta ocupada')}
        }else{console.log("No es tu turno")}
    }

    comerPeonNegro(num,direccion){
        if(this.turno=='N'){
            var nombre='NPeon'+num;
            var pos=getPiece(nombre);
            var aux=tab.tablero[pos];
            try{
                switch(direccion){
                    case 'izquierda':if( tab.tablero[pos+7].name.charAt(0)=="B" && this.isRight){
                        this.turno='B';
                        this.actualizar(pos,+7,aux);
                        Blancas.Piezas--;
                        console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                    };break;
                    case 'derecha':if( tab.tablero[pos+9].name.charAt(0)=="B" && this.isRight){
                        this.turno='B';
                        this.actualizar(pos,+9,aux);
                        Blancas.Piezas--;
                        console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                    };
                }
            }catch(error){console.log("No hay nada para comer")}
        }else{console.log("No es tu turno")}
    }

    moverPeonBlanco(num){
        if(this.turno=='B'){
            var nombre='BPeon'+num;
            var pos=getPiece(nombre);
            var aux=tab.tablero[pos];
            if(tab.tablero[pos-8]==""){this.turno='N';this.actualizar(pos,-8,aux);}else{console.log('Esa direccion esta ocupada')}
        }else{console.log("No es tu turno")}
    }

    comerPeonBlanco(num,direccion){
        if(this.turno=='B'){
            var nombre='BPeon'+num;
            var pos=getPiece(nombre);
            var aux=tab.tablero[pos];
            try{
                switch(direccion){
                    case 'izquierda':if( tab.tablero[pos-9].name.charAt(0)=="N" && this.isRight){
                        this.turno='N';
                        this.actualizar(pos,-9,aux);
                        Negras.Piezas--;
                        console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                    };break;
                    case 'derecha':if( tab.tablero[pos-7].name.charAt(0)=="N" && this.isRight){
                        this.turno='N';
                        this.actualizar(pos,-7,aux);
                        Negras.Piezas--;
                        console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                    };
                }
            }catch(error){console.log("No hay nada para comer")}
        }else{console.log("No es tu turno")}
    }

    moverAlfilBlanco(num,direccion,pasos){
        if(this.turno=='B'){
            this.turno='N';
            var nombre='BAlfil'+num;
            for(var i=0;i<pasos;i++){
                var pos=getPiece(nombre);
                var aux=tab.tablero[pos];
                    try{
                    switch (direccion){
                        case 'arribaI':if(tab.tablero[pos-9]=="" && this.isLeft(pos)){
                            this.actualizar(pos,-9,aux);
                        }else{
                            if(tab.tablero[pos-9].name.charAt(0)=='N' && this.isLeft(pos)){
                                this.actualizar(pos,-9,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arribaD':if(tab.tablero[pos-7]=="" && this.isRight(pos)){
                            this.actualizar(pos,-7,aux);
                        }else{
                            if(tab.tablero[pos-7].name.charAt(0)=='N' && this.isRight(pos)){
                                this.actualizar(pos,-7,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }
                        };break;
                        case 'abajoI':if(tab.tablero[pos+7]=="" && this.isLeft(pos)){
                            this.actualizar(pos,+7,aux);
                        }else{
                            if(tab.tablero[pos+7].name.charAt(0)=='N' && this.isLeft(pos)){
                                this.actualizar(pos,+7,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajoD':if(tab.tablero[pos+7]=="" && this.isRight(pos)){
                            this.actualizar(pos,+9,aux);
                        }else{
                            if(tab.tablero[pos+9].name.charAt(0)=='N' && this.isRight(pos)){
                                this.actualizar(pos,+9,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        }
                    }
                }catch(error){console.log("No se puede realizar el movimiento");}
            }
        }else{console.log("No es tu turno")}
    }

    moverAlfilNegro(num,direccion,pasos){
        if(this.turno=='N'){
            this.turno='B';
            var nombre='NAlfil'+num;
            for(var i=0;i<pasos;i++){
                var pos=getPiece(nombre);
                var aux=tab.tablero[pos];
                    try{
                    switch (direccion){
                        case 'arribaI':if(tab.tablero[pos-9]=="" && this.isLeft(pos)){
                            this.actualizar(pos,-9,aux);
                        }else{
                            if(tab.tablero[pos-9].name.charAt(0)=='B' && this.isLeft(pos)){
                                this.actualizar(pos,-9,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arribaD':if(tab.tablero[pos-7]=="" && this.isRight(pos)){
                            this.actualizar(pos,-7,aux);
                        }else{
                            if(tab.tablero[pos-7].name.charAt(0)=='B' && this.isRight(pos)){
                                this.actualizar(pos,-7,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }
                        };break;
                        case 'abajoI':if(tab.tablero[pos+7]=="" && this.isLeft(pos)){
                            this.actualizar(pos,+7,aux);
                        }else{
                            if(tab.tablero[pos+7].name.charAt(0)=='B' && this.isLeft(pos)){
                                this.actualizar(pos,+7,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajoD':if(tab.tablero[pos+7]=="" && this.isRight(pos)){
                            this.actualizar(pos,+7,aux);
                        }else{
                            if(tab.tablero[pos+9].name.charAt(0)=='B' && this.isRight(pos)){
                                this.actualizar(pos,+9,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        }
                    }
                }catch(error){console.log("No se puede realizar el movimiento");}
            }
        }else{console.log("No es tu turno")}
    }

    moverTorreBlanco(num,direccion,pasos){
        if(this.turno=='B'){
            this.turno='N';
            var nombre='BTorre'+num;
            for(var i=0;i<pasos;i++){
                var pos=getPiece(nombre);
                var aux=tab.tablero[pos];
                    try{
                    switch (direccion){
                        case 'arriba':if(tab.tablero[pos-8]==""){
                            this.actualizar(pos,-8,aux);
                        }else{
                            if(tab.tablero[pos-8].name.charAt(0)=='N'){
                                this.actualizar(pos,-8,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'izquierda':if(tab.tablero[pos-1]=="" && this.isLeft(pos)){
                            this.actualizar(pos,-1,aux);
                        }else{
                            if(tab.tablero[pos-1].name.charAt(0)=='N' && this.isLeft(pos)){
                                this.actualizar(pos,-1,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }
                        };break;
                        case 'derecha':if(tab.tablero[pos+1]=="" && this.isRight(pos)){
                            this.actualizar(pos,+1,aux);
                        }else{
                            if(tab.tablero[pos+1].name.charAt(0)=='N' && this.isRight(pos)){
                                this.actualizar(pos,+1,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajo':if(tab.tablero[pos+8]==""){
                            this.actualizar(pos,+8,aux);
                        }else{
                            if(tab.tablero[pos+8].name.charAt(0)=='N'){
                                this.actualizar(pos,+8,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };
                    }
                }catch(error){console.log("No se puede realizar el movimiento");}
            }
        }else{console.log("No es tu turno")}    
    }

    moverTorreNegro(num,direccion,pasos){
        if(this.turno=='N'){
            this.turno='B';
            var nombre='NTorre'+num;
            for(var i=0;i<pasos;i++){
                var pos=getPiece(nombre);
                var aux=tab.tablero[pos];
                    try{
                    switch (direccion){
                        case 'arriba':if(tab.tablero[pos-8]==""){
                            this.actualizar(pos,-8,aux);
                        }else{
                            if(tab.tablero[pos-8].name.charAt(0)=='B'){
                                this.actualizar(pos,-8,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'izquierda':if(tab.tablero[pos-1]=="" && this.isLeft(pos)){
                            this.actualizar(pos,-1,aux);
                        }else{
                            if(tab.tablero[pos-1].name.charAt(0)=='B' && this.isLeft(pos)){
                                this.actualizar(pos,-1,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }
                        };break;
                        case 'derecha':if(tab.tablero[pos+1]=="" && this.isRight(pos)){
                            this.actualizar(pos,+1,aux);
                        }else{
                            if(tab.tablero[pos+1].name.charAt(0)=='B' && this.isRight(pos)){
                                this.actualizar(pos,+1,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajo':if(tab.tablero[pos+8]==""){
                            this.actualizar(pos,+8,aux);
                        }else{
                            if(tab.tablero[pos+8].name.charAt(0)=='B' && this.isRight(pos)){
                                this.actualizar(pos,+8,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };
                    }
                }catch(error){console.log("No se puede realizar el movimiento");}
            }
        }else{console.log("No es tu turno")}
    }

    moverReyNegro(direccion){
        if(this.turno=='N'){
            var nombre='NRey';
                var pos=getPiece(nombre);
                var aux=tab.tablero[pos];
                    try{
                    switch (direccion){
                        case 'abajoI':if(tab.tablero[pos+7]=="" && this.isLeft(pos)){
                            this.turno='B';
                            this.actualizar(pos,+7,aux);
                        }else{
                            if(tab.tablero[pos+7].name.charAt(0)=='B' && this.isLeft(pos)){
                                this.turno='B';
                                this.actualizar(pos,+7,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajoD':if(tab.tablero[pos+9]=="" && this.isRight(pos)){
                            this.turno='B';
                            this.actualizar(pos,+9,aux);
                        }else{
                            if(tab.tablero[pos+9].name.charAt(0)=='B' && this.isRight(pos)){
                                this.turno='B';
                                this.actualizar(pos,+9,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arribaD':if(tab.tablero[pos-7]=="" && this.isRight(pos)){
                            this.turno='B';
                            this.actualizar(pos,-7,aux);
                        }else{
                            if(tab.tablero[pos-7].name.charAt(0)=='B' && this.isRight(pos)){
                                this.turno='B';
                                this.actualizar(pos,-7,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arribaI':if(tab.tablero[pos-9]=="" && this.isLeft(pos)){
                            this.actualizar(pos,-9,aux);
                            this.turno='B';
                        }else{
                            if(tab.tablero[pos-9].name.charAt(0)=='B' && this.isLeft(pos)){
                                this.turno='B';
                                this.actualizar(pos,-9,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arriba':if(tab.tablero[pos-8]==""){
                            this.turno='B';
                            this.actualizar(pos,-8,aux);
                        }else{
                            if(tab.tablero[pos-8].name.charAt(0)=='B'){
                                this.turno='B';
                                this.actualizar(pos,-8,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'izquierda':if(tab.tablero[pos-1]=="" && this.isLeft(pos)){
                            this.turno='B';
                            this.actualizar(pos,-1,aux);
                        }else{
                            if(tab.tablero[pos-1].name.charAt(0)=='B' && this.isLeft(pos)){
                                this.turno='B';
                                this.actualizar(pos,-1,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }
                        };break;
                        case 'derecha':if(tab.tablero[pos+1]=="" && this.isRight(pos)){
                            this.turno='B';
                            this.actualizar(pos,+1,aux);
                        }else{
                            if(tab.tablero[pos+1].name.charAt(0)=='B' && this.isRight(pos)){
                                this.turno='B';
                                this.actualizar(pos,+1,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajo':if(tab.tablero[pos+8]=="" && this.isRight(pos)){
                            this.turno='B';
                            this.actualizar(pos,+8,aux);
                        }else{
                            if(tab.tablero[pos+8].name.charAt(0)=='B' && this.isRight(pos)){
                                this.turno='B';
                                this.actualizar(pos,+8,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };
                    }
                }catch(error){console.log("No se puede realizar el movimiento");}
        }else{console.log("No es tu turno")}
    }

    moverReyBlanco(direccion){
        if(this.turno=='B'){
            var nombre='BRey';
            var pos=getPiece(nombre);
            var aux=tab.tablero[pos];
                try{
                    switch (direccion){
                        case 'abajoI':if(tab.tablero[pos+7]=="" && this.isLeft(pos)){
                            this.turno='N';
                            this.actualizar(pos,+7,aux);
                        }else{
                            if(tab.tablero[pos+7].name.charAt(0)=='N' && this.isLeft(pos)){
                                this.turno='N';
                                this.actualizar(pos,+7,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajoD':if(tab.tablero[pos+9]=="" && this.isRight(pos)){
                            this.turno='N';
                            this.actualizar(pos,+9,aux);
                        }else{
                            if(tab.tablero[pos+9].name.charAt(0)=='N' && this.isRight(pos)){
                                this.turno='N';
                                this.actualizar(pos,+9,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arribaD':if(tab.tablero[pos-7]=="" && this.isRight(pos)){
                            this.turno='N';
                            this.actualizar(pos,-7,aux);
                        }else{
                            if(tab.tablero[pos-7].name.charAt(0)=='N' && this.isRight(pos)){
                                this.turno='N';
                                this.actualizar(pos,-7,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arribaI':if(tab.tablero[pos-9]=="" && this.isLeft(pos)){
                            this.turno='N';
                            this.actualizar(pos,-9,aux);
                        }else{
                            if(tab.tablero[pos-9].name.charAt(0)=='N' && this.isLeft(pos)){
                                this.turno='N';
                                this.actualizar(pos,-9,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arriba':if(tab.tablero[pos-8]==""){
                            this.turno='N';
                            this.actualizar(pos,-8,aux);
                        }else{
                            if(tab.tablero[pos-8].name.charAt(0)=='N'){
                                this.turno='N';
                                this.actualizar(pos,-8,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'izquierda':if(tab.tablero[pos-1]=="" && this.isLeft(pos)){
                            this.turno='N';
                            this.actualizar(pos,-1,aux);
                        }else{
                            if(tab.tablero[pos-1].name.charAt(0)=='N' && this.isLeft(pos)){
                                this.turno='N';
                                this.actualizar(pos,-1,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }
                        };break;
                        case 'derecha':if(tab.tablero[pos+1]=="" && this.isRight(pos)){
                            this.turno='N';
                            this.actualizar(pos,+1,aux);
                        }else{
                            if(tab.tablero[pos+1].name.charAt(0)=='N' && this.isRight(pos)){
                                this.turno='N';
                                this.actualizar(pos,+1,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajo':if(tab.tablero[pos+8]=="" && this.isRight(pos)){
                            this.turno='N';
                            this.actualizar(pos,+8,aux);
                        }else{
                            if(tab.tablero[pos+8].name.charAt(0)=='N' && this.isRight(pos)){
                                this.turno='N';
                                this.actualizar(pos,+8,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };
                    }
                }catch(error){console.log("No se puede realizar el movimiento");}
        }else{console.log("No es tu turno")}
    }

    moverReinaNegro(direccion,pasos){
        if(this.turno=='N'){
            this.turno='B';
            var nombre='NReina';
            for(var i=0;i<pasos;i++){
                var pos=getPiece(nombre);
                var aux=tab.tablero[pos];
                    try{
                    switch (direccion){
                        case 'abajoI':if(tab.tablero[pos+7]=="" && this.isLeft(pos)){
                            this.actualizar(pos,+7,aux);
                        }else{
                            if(tab.tablero[pos+7].name.charAt(0)=='B' && this.isLeft(pos)){
                                this.actualizar(pos,+7,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajoD':if(tab.tablero[pos+9]=="" && this.isRight(pos)){
                            this.actualizar(pos,+9,aux);
                        }else{
                            if(tab.tablero[pos+9].name.charAt(0)=='B' && this.isRight(pos)){
                                this.actualizar(pos,+9,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arribaD':if(tab.tablero[pos-7]=="" && this.isRight(pos)){
                            this.actualizar(pos,-7,aux);
                        }else{
                            if(tab.tablero[pos-7].name.charAt(0)=='B' && this.isRight(pos)){
                                this.actualizar(pos,-7,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arribaI':if(tab.tablero[pos-9]=="" && this.isLeft(pos)){
                            this.actualizar(pos,-9,aux);
                        }else{
                            if(tab.tablero[pos-9].name.charAt(0)=='B' && this.isLeft(pos)){
                                this.actualizar(pos,-9,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arriba':if(tab.tablero[pos-8]==""){
                            this.actualizar(pos,-8,aux);
                        }else{
                            if(tab.tablero[pos-8].name.charAt(0)=='B'){
                                this.actualizar(pos,-8,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'izquierda':if(tab.tablero[pos-1]=="" && this.isLeft(pos)){
                            this.actualizar(pos,-1,aux);
                        }else{
                            if(tab.tablero[pos-1].name.charAt(0)=='B' && this.isLeft(pos)){
                                this.actualizar(pos,-1,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }
                        };break;
                        case 'derecha':if(tab.tablero[pos+1]=="" && this.isRight(pos)){
                            this.actualizar(pos,+1,aux);
                        }else{
                            if(tab.tablero[pos+1].name.charAt(0)=='B' && this.isRight(pos)){
                                this.actualizar(pos,+1,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajo':if(tab.tablero[pos+8]==""){
                            this.actualizar(pos,+8,aux);
                        }else{
                            if(tab.tablero[pos+8].name.charAt(0)=='B'){
                                this.actualizar(pos,+8,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };
                    }
                }catch(error){console.log("No se puede realizar el movimiento");}
            }
        }else{console.log("No es tu turno")}
    }

    moverReinaBlanco(direccion,pasos){
        if(this.turno=='B'){
            this.turno='N';
            var nombre='BReina';
            for(var i=0;i<pasos;i++){
                var pos=getPiece(nombre);
                var aux=tab.tablero[pos];
                    try{
                    switch (direccion){
                        case 'abajoI':if(tab.tablero[pos+7]=="" && this.isLeft(pos)){
                            this.actualizar(pos,+7,aux);
                        }else{
                            if(tab.tablero[pos+7].name.charAt(0)=='N' && this.isLeft(pos)){
                                this.actualizar(pos,+7,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajoD':if(tab.tablero[pos+9]=="" && this.isRight(pos)){
                            this.actualizar(pos,+9,aux);
                        }else{
                            if(tab.tablero[pos+9].name.charAt(0)=='N' && this.isRight(pos)){
                                this.actualizar(pos,+9,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arribaD':if(tab.tablero[pos-7]=="" && this.isRight(pos)){
                            this.actualizar(pos,-7,aux);
                        }else{
                            if(tab.tablero[pos-7].name.charAt(0)=='N' && this.isRight(pos)){
                                this.actualizar(pos,-7,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arribaI':if(tab.tablero[pos-9]=="" && this.isLeft(pos)){
                            this.actualizar(pos,-9,aux);
                        }else{
                            if(tab.tablero[pos-9].name.charAt(0)=='N' && this.isLeft(pos)){
                                this.actualizar(pos,-9,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'arriba':if(tab.tablero[pos-8]==""){
                            this.actualizar(pos,-8,aux);
                        }else{
                            if(tab.tablero[pos-8].name.charAt(0)=='N'){
                                this.actualizar(pos,-8,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'izquierda':if(tab.tablero[pos-1]=="" && this.isLeft(pos)){
                            this.actualizar(pos,-1,aux);
                        }else{
                            if(tab.tablero[pos-1].name.charAt(0)=='N' && this.isLeft(pos)){
                                this.actualizar(pos,-1,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }
                        };break;
                        case 'derecha':if(tab.tablero[pos+1]=="" && this.isRight(pos)){
                            this.actualizar(pos,+1,aux);
                        }else{
                            if(tab.tablero[pos+1].name.charAt(0)=='N' && this.isRight(pos)){
                                this.actualizar(pos,+1,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajo':if(tab.tablero[pos+8]==""){
                            this.actualizar(pos,+8,aux);
                        }else{
                            if(tab.tablero[pos+8].name.charAt(0)=='N'){
                                this.actualizar(pos,+8,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                i=pasos;
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };
                    }
                }catch(error){console.log("No se puede realizar el movimiento");}
            }
        }else{console.log("No es tu turno")}
    }

    moverCaballoBlanco(num,mov2,mov1){
        if(this.turno=='B'){
            var nombre=("BCaballo"+num);
            var pos=getPiece(nombre);
            var aux=tab.tablero[pos];
            try{
                switch(mov2){
                    case 'arriba':switch(mov1){
                        case 'izquierda':if(tab.tablero[pos-17]=="" && this.isLeft(pos)){
                            this.turno='N';
                            this.actualizar(pos,-17,aux);
                        }else{
                            if(tab.tablero[pos-17].name.charAt(0)=='N' && this.isLeft(pos)){
                                this.turno='N';
                                this.actualizar(pos,-17,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'derecha':if(tab.tablero[pos-15]=="" && this.isRight(pos)){
                            this.turno='N';
                            this.actualizar(pos,-15,aux);
                        }else{
                            if(tab.tablero[pos-15].name.charAt(0)=='N' && this.isRight(pos)){
                                this.turno='N';
                                this.actualizar(pos,-15,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")};
                        }
                    };break;
                    case 'abajo':switch(mov1){
                        case 'izquierda':if(tab.tablero[pos+15]=="" && this.isLeft(pos)){
                            this.turno='N';
                            this.actualizar(pos,+15,aux);
                        }else{
                            if(tab.tablero[pos+15].name.charAt(0)=='N' && this.isLeft(pos)){
                                this.turno='N';
                                this.actualizar(pos,+15,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'derecha':if(tab.tablero[pos+17]=="" && this.isRight(pos)){
                            this.turno='N';
                            this.actualizar(pos,+17,aux);
                        }else{
                            if(tab.tablero[pos+17].name.charAt(0)=='N' && this.isRight(pos)){
                                this.turno='N';
                                this.actualizar(pos,+17,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")};
                        }
                    };break;
                    case 'izquierda':switch(mov1){
                        case 'arriba':if(tab.tablero[pos-10]=="" && this.isLeft(pos) && this.isLeft1(pos)){
                            this.turno='N';
                            this.actualizar(pos,-10,aux);
                        }else{
                            if(tab.tablero[pos-10].name.charAt(0)=='N' && this.isLeft(pos) && this.isLeft1(pos)){
                                this.turno='N';
                                this.actualizar(pos,-10,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajo':if(tab.tablero[pos+6]=="" && this.isLeft(pos) && this.isLeft1(pos)){
                            this.turno='N';
                            this.actualizar(pos,+6,aux);
                        }else{
                            if(tab.tablero[pos+6].name.charAt(0)=='N' && this.isLeft(pos) && this.isLeft1(pos)){
                                this.turno='N';
                                this.actualizar(pos,+6,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")};
                        }
                    };break;
                    case 'derecha':switch(mov1){
                        case 'arriba':if(tab.tablero[pos-6]=="" && this.isRight(pos) && this.isRight1(pos)){
                            this.turno='N';
                            this.actualizar(pos,-6,aux);
                        }else{
                            if(tab.tablero[pos-6].name.charAt(0)=='N' && this.isRight(pos) && this.isRight1(pos)){
                                this.turno='N';
                                this.actualizar(pos,-6,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajo':if(tab.tablero[pos+10]=="" && this.isRight(pos) && this.isRight1(pos)){
                            this.turno='N';
                            this.actualizar(pos,+10,aux);
                        }else{
                            if(tab.tablero[pos+10].name.charAt(0)=='N' && this.isRight(pos) && this.isRight1(pos)){
                                this.turno='N';
                                this.actualizar(pos,+10,aux);
                                Negras.Piezas--;
                                console.log('Equipo Negro: '+Negras.Piezas+' restantes');
                                break;
                            }else{console.log("No puedes realizar ese movimiento")};
                        }
                    }
                }
            }catch(error){}
        }else{console.log("No es tu turno")}
    }

    moverCaballoNegro(num,mov2,mov1){
        if(this.turno=='N'){
            var nombre=("NCaballo"+num);
            var pos=getPiece(nombre);
            var aux=tab.tablero[pos];
            try{
                switch(mov2){
                    case 'arriba':switch(mov1){
                        case 'izquierda':if(tab.tablero[pos-17]=="" && this.isLeft(pos)){
                            this.turno='B';
                            this.actualizar(pos,-17,aux);
                        }else{
                            if(tab.tablero[pos-17].name.charAt(0)=='B' && this.isLeft(pos)){
                                this.turno='B';
                                this.actualizar(pos,-17,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'derecha':if(tab.tablero[pos-15]=="" && this.isRight(pos)){
                            this.turno='B';
                            this.actualizar(pos,-15,aux);
                        }else{
                            if(tab.tablero[pos-15].name.charAt(0)=='B' && this.isRight(pos)){
                                this.turno='B';
                                this.actualizar(pos,-15,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")};
                        }
                    };break;
                    case 'abajo':switch(mov1){
                        case 'izquierda':if(tab.tablero[pos+15]=="" && this.isLeft(pos)){
                            this.turno='B';
                            this.actualizar(pos,+15,aux);
                        }else{
                            if(tab.tablero[pos+15].name.charAt(0)=='B' && this.isLeft(pos)){
                                this.turno='B';
                                this.actualizar(pos,+15,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'derecha':if(tab.tablero[pos+17]=="" && this.isRight(pos)){
                            this.turno='B';
                            this.actualizar(pos,+17,aux);
                        }else{
                            if(tab.tablero[pos+17].name.charAt(0)=='B' && this.isRight(pos)){
                                this.turno='B';
                                this.actualizar(pos,+17,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")};
                        }
                    };break;
                    case 'izquierda':switch(mov1){
                        case 'arriba':if(tab.tablero[pos-10]=="" && this.isLeft(pos) && this.isLeft1(pos)){
                            this.turno='B';
                            this.actualizar(pos,-10,aux);
                        }else{
                            if(tab.tablero[pos-10].name.charAt(0)=='B' && this.isLeft(pos) && this.isLeft1(pos)){
                                this.turno='B';
                                this.actualizar(pos,-10,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajo':if(tab.tablero[pos+6]=="" && this.isLeft(pos) && this.isLeft1(pos)){
                            this.turno='B';
                            this.actualizar(pos,+6,aux);
                        }else{
                            if(tab.tablero[pos+6].name.charAt(0)=='B' && this.isLeft(pos) && this.isLeft1(pos)){
                                this.turno='B';
                                this.actualizar(pos,+6,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")};
                        }
                    };break;
                    case 'derecha':switch(mov1){
                        case 'arriba':if(tab.tablero[pos-6]=="" && this.isRight(pos) && this.isRight1(pos)){
                            this.turno='B';
                            this.actualizar(pos,-6,aux);
                        }else{
                            if(tab.tablero[pos-6].name.charAt(0)=='B' && this.isRight(pos) && this.isRight1(pos)){
                                this.turno='B';
                                this.actualizar(pos,-6,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")}
                        };break;
                        case 'abajo':if(tab.tablero[pos+10]=="" && this.isRight(pos) && this.isRight1(pos)){
                            this.turno='B';
                            this.actualizar(pos,+10,aux);
                        }else{
                            if(tab.tablero[pos+10].name.charAt(0)=='B' && this.isRight(pos) && this.isRight1(pos)){
                                this.turno='B';
                                this.actualizar(pos,+10,aux);
                                Blancas.Piezas--;
                                console.log("Equipo Blanco: "+Blancas.Piezas+" restantes");
                                break;
                            }else{console.log("No puedes realizar ese movimiento")};
                        }
                    }
                }
            }catch(error){}
        }else{console.log("No es tu turno")}
    }
}
/*Controla los jugadores*/
class Player{
    constructor(equipo){
        this.equipo=equipo;
        this.Piezas=16;
        this.Torre1=true;
        this.Caballo1=true;
        this.Alfil1=true;
        this.Reina=true;
        this.Rey=true
        this.Alfil2=true;
        this.Caballo2=true;
        this.Torre2=true;
        this.Peon1=true;
        this.Peon2=true;
        this.Peon3=true;
        this.Peon4=true;
        this.Peon5=true;
        this.Peon6=true;
        this.Peon7=true;
        this.Peon8=true;
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
Blancas=new Player('Blanco');
Negras=new Player('Negro');