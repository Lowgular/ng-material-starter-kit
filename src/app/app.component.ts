import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  of,
  startWith,
} from 'rxjs';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public searchTerm: FormControl<string> = new FormControl();

  private processName = (name: string, searchTerm: string): string => {
    return name
      .split(' ')
      .map((w) => (w.includes(searchTerm) ? `*${w}*` : w))
      .join(' ');
  };

  products$: Observable<any[]> = combineLatest([
    this._productsService.getAll(),
    this.searchTerm.valueChanges.pipe(startWith(undefined)),
  ]).pipe(
    map(([products, searchTerm]) =>
      products.map((p) => ({
        ...p,
        name:
          searchTerm === undefined
            ? p.name
            : this.processName(p.name, searchTerm),
      }))
    )
  );

  private _langOptionsSubject: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >(['en', 'pl']);
  public langOptions$: Observable<string[]> =
    this._langOptionsSubject.asObservable();

  private _selectedOptionSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('en');
  public selectedOption$: Observable<string> =
    this._selectedOptionSubject.asObservable();

  public headers$: Observable<string[]> = combineLatest([
    of({
      en: ['Name', 'Price', 'Image'],
      pl: ['Nazwa', 'Cena', 'Obrazek'],
    }),
    this.selectedOption$,
  ]).pipe(map(([translation, lang]) => translation[lang as 'en' | 'pl']));

  constructor(private _productsService: ProductsService) {}

  onLangSelected(lang: string) {
    this._selectedOptionSubject.next(lang);
  }
}
