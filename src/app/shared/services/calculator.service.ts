import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public static readonly ADDITION: string = '+';
  public static readonly SUBTRACTION: string = '-';
  public static readonly DIVISION: string = '/';
  public static readonly MULTIPLICATION: string = '*';

  public calculate(first: number, second: number, operator: string): number {
    switch (operator) {
      case CalculatorService.ADDITION:
        return first + second;
      case CalculatorService.SUBTRACTION:
        return first - second;
      case CalculatorService.DIVISION:
        return first / second;
      case CalculatorService.MULTIPLICATION:
        return first * second;
      default:
        return 0;
    }
  }
}
