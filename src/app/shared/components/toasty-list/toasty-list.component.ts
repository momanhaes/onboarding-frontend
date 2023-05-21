import { Component } from '@angular/core';
import { ToastyService } from '../../services/toasty.service';
import { IToasty } from '../../interfaces/shared.interface';

@Component({
  selector: 'app-toasty-list',
  templateUrl: './toasty-list.component.html',
  styleUrls: ['./toasty-list.component.scss'],
})

export class ToastyListComponent {

  public toasties: IToasty[] = [];

  constructor(private toasty: ToastyService) {
    this.toasty._show.subscribe((data: IToasty[]) => { this.toasties = data; });
  }
}
