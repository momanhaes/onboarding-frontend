import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDialogData } from '../../interfaces/shared.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: IDialogData) {}

  cancel(): void {
    this.dialogRef.close({ confirm: false, origin: this.data.origin });
  }
  
  confirm(): void {
    this.dialogRef.close({ confirm: true, origin: this.data.origin });
  }
}
