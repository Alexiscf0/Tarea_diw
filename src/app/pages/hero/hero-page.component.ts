import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  standalone: true,
  imports: [],
})
export class HeroPageComponent {
  // 1. Crear las señales
  public name = signal<string>('Ironman');
  public age = signal<number>(45);

  // 2. Método getHeroDescription (Concatenación)
  public getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  // Extra: Nombre capitalizado usando computed (mayúsculas)
  public capitalizedName = computed(() => this.name().toUpperCase());

  // 3. Método changeHero
  public changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  // 4. Método changeAge
  public changeAge(): void {
    this.age.set(60);
  }

  // 5. Método resetForm
  public resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }
}