import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  animations: [APPEARD],
})
export class InputComponent implements AfterViewInit {
  public isRequiredError: boolean = false;
  public isEmailError: boolean = false;
  public hasError: boolean = false;
  public state: string = 'ready';

  @Input() form!: UntypedFormGroup;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() control: string = '';
  @Input() label: string = '';
  @Input() mask: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.disabled) { this.form.get(this.control)?.disable({ onlySelf: true, emitEvent: false }); }
    this.cdr.detectChanges();

    this.form?.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.hasError = this.form.get(this.control)?.errors && (this.form.get(this.control)?.dirty || this.form.get(this.control)?.touched) ? true : false;
      this.isRequiredError = this.form.get(this.control)?.errors?.['required'];
      this.isEmailError = this.form.get(this.control)?.errors?.['pattern'];
      this.cdr.detectChanges();
    });
  }
}
