import { Component, input } from '@angular/core';
import { receitaModel } from '../../core/services/models/receitaModel';

@Component({
  selector: 'app-receita',
  imports: [],
  templateUrl: './receita.html',
  styleUrl: './receita.css',
})
export class Receita {
  data = input.required<receitaModel>()
}
