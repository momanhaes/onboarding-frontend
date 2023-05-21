import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { IStyleguideInput } from 'src/app/shared/interfaces/styleguide.interface';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { EMAIL_PATTERN } from 'src/app/shared/utils/patterns';
import { StyleguideService } from '../styleguide.service';
import { INPUTS } from '../styleguide.content';

@Component({
  selector: 'app-inputs-page',
  templateUrl: './inputs-page.component.html',
  styleUrls: ['./inputs-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class InputsPageComponent implements OnInit {
  public content: IStyleguideInput[] = INPUTS;
  public form!: UntypedFormGroup;
  public state = 'ready';
  public show!: boolean;

  constructor(private styleguideService: StyleguideService) {}
  
  public get searchText(): string {
    return this.form.get('search')?.value;
  }

  ngOnInit() {
    this.form = new UntypedFormGroup({
      input: new UntypedFormControl(''),
      search: new UntypedFormControl(''),
      password: new UntypedFormControl(''),
      disabled: new UntypedFormControl(''),
      required: new UntypedFormControl('', [Validators.required]),
      email: new UntypedFormControl('', [Validators.pattern(EMAIL_PATTERN)]),
    });

    setTimeout(() => {
      this.show = true;
    }, 0);
  }

  public clip(code: string): void {
    this.styleguideService.clip(code);
  }
}
