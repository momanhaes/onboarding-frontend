import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  public notifier = new EventEmitter();

  public notify(message: string): void {
    this.notifier.emit(message);
  }
}
