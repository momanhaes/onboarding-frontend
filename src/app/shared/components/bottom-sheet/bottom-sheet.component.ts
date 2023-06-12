import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {
  public bottomSheetEvent = new EventEmitter<string[]>();

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: string[], private notificationService: NotificationService) { }

  public cleanHistory(): void {
    this.data = [];
    this.notificationService.notify('CLEAN');
  }
}
