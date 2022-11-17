import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PublicHolidaysModel } from '../../models/public-holidays.model';
import { PublicHolidaysService } from '../../services/public-holidays.service';

@Component({
  selector: 'app-public-holidays',
  styleUrls: ['./public-holidays.component.scss'],
  templateUrl: './public-holidays.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicHolidaysComponent {
  constructor(private _publicHolidaysService: PublicHolidaysService) {}

  readonly holidays$: Observable<PublicHolidaysModel[] | null> =
    this._publicHolidaysService.getAll();
}
