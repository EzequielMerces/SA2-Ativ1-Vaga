export class Vaga {
    id: number = 0;
    nome:string ="";
    foto:string="";
    reqObg: string = "";
    reqDes: string="";
    descricao: string="";
    salario: number=0;
    local: string="";

    constructor(id:number,nome:string,foto:string,reqObg:string,reqDes:string,descricao:string,salario:number,local:string){
        this.id = id;
        this.nome=nome;
        this.foto=foto;
        this.reqObg= reqObg;
        this.reqDes=reqDes;
        this.descricao=descricao;
        this.salario=salario;
        this.local=local;
    }
}