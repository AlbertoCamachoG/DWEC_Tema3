class Book{
    constructor(titulo,genero,autor,leido){
        this.title=titulo;
        this.genre=genero;
        this.author=autor;
        this.read=leido;
        if(leido==undefined){this.readDate=Date.now;}
        if(leido==undefined){this.read=false;}
    }
}
class Booklist{
        constructor(){
            this.lista =[];
        }
        booksRead=0;
        booksUnread=0;
        nextRead="No hay libros nuevos";
        actualRead="No hay libros";
        actualN=0;
        lastRead="No te has leido nada";
        lista=Array();
    
    leido(){
        this.booksRead++;
        if(this.booksUnread>0){
            this.booksUnread--;
        }
    }

    add(book){
        this.lista.push(book);
        if(book.read==true){
            this.booksRead++;
            this.lastBook();
            this.actualBook();
            this.nextBook();
        }else{
            this.booksUnread++;
            this.lastBook();
            this.actualBook();
            this.nextBook();
        }
    }

    lastBook(){
        for(var i=this.lista.length-1;i>=0;i--){
            if(this.lista[i].read==true){
                this.lastRead=this.lista[i].title;
                break;
            }
        }
    }

    actualBook(){
        for(var i=0;i<this.lista.length;i++){
            if(this.lista[i].read==false){
                this.actualRead=this.lista[i].title;
                this.actualN=i;
                break;
            }
        }
    }

    nextBook(){
        for(var i=0;i<this.lista.length;i++){
            if(this.lista[i].read==false && i!=this.actualN){
                this.nextRead=this.lista[i].title;
                break;
            }else{
                if(i==this.lista.length){
                    this.nextRead="No hay libros";
                }
            }
        }
    }

    //si el libro no estaba acabado lo actualiza y le da una fecha
    finishCurrentBook(){
        for(var i=0; i<=this.lista.length-1;i++){
            if(this.lista[i].title==this.actualRead){
                this.lista[i].read=true
                this.booksRead++;
                this.booksUnread--;
                this.lista[i].readDate=Date.now();
                this.lastBook();
                this.actualBook();
                this.nextBook();
                console.log("e");
                break;
            }else{
                console.log("El libro ya estaba marcado como leido, operacion fallida con exito")
            }
        }
    }
}
booklist =new Booklist();
booklist.add(new Book("Harry Potter","fantasia","terfa",true));
booklist.add(new Book("Trucos de golf","sci fi","thor",false));
booklist.add(new Book("El pollo","recetas","Kenkro",false));
booklist.add(new Book("Historias de halloween","terror","Miedo",false));
booklist.add(new Book("Hentai","jeje","Toast",false,Date.now));
booklist.add(new Book("100 maneras de morirte","tutorial","Dios",false));
booklist.add(new Book("Programar goes brrr","sci fi","Mentiras",false));