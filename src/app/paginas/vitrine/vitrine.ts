import { Component, inject, OnInit, signal } from '@angular/core';
import { Receita } from "../../shared/receita/receita";
import { receitaModel } from '../../core/services/models/receitaModel';
import { ReceitaServices } from '../../core/services/receita-services';

@Component({
  selector: 'app-vitrine',
  imports: [Receita],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine implements OnInit {

  private readonly receitaService = inject(ReceitaServices)
  receita = signal<receitaModel[]>([]);
  ngOnInit(): void {
    this.receitaService.getAll().subscribe((res) => {
      this.receita.set(res)
    })
  }
}
