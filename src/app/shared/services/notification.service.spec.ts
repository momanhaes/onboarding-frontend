import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService],
    });
    service = TestBed.inject(NotificationService);
  });

  it('Deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  it('Deve emitir uma notificação', () => {
    const message = 'Mensagem de teste';
    const notifierSpy = spyOn(service.notifier, 'emit');
    service.notify(message);
    expect(notifierSpy).toHaveBeenCalledWith(message);
  });
});
