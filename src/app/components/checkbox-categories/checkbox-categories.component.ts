import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import { CategoryModel } from '../../models/category.model';

@Component({
  selector: 'app-checkbox-categories',
  styleUrls: ['./checkbox-categories.component.scss'],
  templateUrl: './checkbox-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxCategoriesComponent {
  constructor(private _categoriesService: CategoriesService) {}

  readonly checkboxCategories$: Observable<CategoryModel[] | null> =
    this._categoriesService.getAll();
}
