import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];

  public heroeBorrado: string = '';

  borrarHeroe(): void {
    console.log('Borrando...');
    const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = heroeBorrado || '';
  }
}
