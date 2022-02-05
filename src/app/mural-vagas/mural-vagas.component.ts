import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vaga.model';
import { VagasService } from '../vagas.service';


@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];


  constructor(private _vagaService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }
  listarVagas() {
    this._vagaService.getVagas()
      .subscribe(
        retornaVaga => {
          this.vagas = retornaVaga.map(
            item => {
              return new Vaga(
                item.id,
                item.nome,
                item.foto,
                item.reqObg,
                item.reqDes,
                item.descricao,
                item.salario,
                item.local
              );
            }
          )
        }
      )
  }

}
