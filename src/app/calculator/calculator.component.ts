import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { APPEARD } from '../shared/animations/appeard.animation';
import { WindowService } from '../shared/services/window.service';
import { CalculatorService } from '../shared/services/calculator.service';
import { BottomSheetComponent } from '../shared/components/bottom-sheet/bottom-sheet.component';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  animations: [APPEARD],
})
export class CalculatorComponent implements OnInit {
  private first: string = '0';
  private second: string = '';
  private result: number = 0;
  private operator: string = '';

  public isMobile: boolean;
  public show: boolean = false;
  public state: string = 'ready';
  public results: Array<string> = [];

  constructor(private calculatorService: CalculatorService, private windowService: WindowService, private _bottomSheet: MatBottomSheet, private notificationService: NotificationService) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
  }

  ngOnInit() {
    setTimeout(() => { this.show = true; }, 0);
    this.windowService.isMobile.subscribe((isMobile: boolean) => (this.isMobile = isMobile));
    this.notificationService.notifier.subscribe((notification: string) => { if (notification === 'CLEAN') { this.results = []; } });
  }

  public get display(): string {
    if (this.result) {
      return this.result.toString();
    }

    if (this.second) {
      return this.second;
    }

    return this.first;
  }

  public clean(): void {
    this.first = '0';
    this.second = '';
    this.result = 0;
    this.operator = '';
  }

  public addNumber(number: string): void {
    if (!this.operator) {
      this.first = this.concatenateNumber(this.first, number);
    } else {
      this.second = this.concatenateNumber(this.second, number);
    }
  }

  public concatenateNumber(currentNumber: string, concatNumber: string): string {
    if (currentNumber === '0' && concatNumber !== '.') {
      return concatNumber;
    }

    if (concatNumber === '.' && currentNumber.indexOf('.') > -1) {
      return currentNumber;
    }

    return currentNumber + concatNumber;
  }

  public defineOperator(operator: string): void {
    if (!this.operator) {
      this.operator = operator;
      return;
    }

    if (this.second) {
      this.result = this.calculatorService.calculate(Number(this.first), Number(this.second), this.operator);
      this.first = this.result.toString();
      this.second = '';
      this.operator = operator;
    }
  }

  public calculate(): void {
    if (!this.second) {
      return;
    }

    this.result = this.calculatorService.calculate(Number(this.first), Number(this.second), this.operator);
    this.results.push(this.resultsMapper(this.first, this.operator, this.second, this.result));
  }

  public resultsMapper(first: string, operator: string, second: string, result: number): string {
    let newOperator: string = operator;

    switch (this.operator) {
      case '*':
        newOperator = 'x';
        break;
      case '/':
        newOperator = '÷';
        break;
    }

    return `${first} ${newOperator} ${second} = ${result}`;
  };

  public openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent, { data: this.results });
  }
}
