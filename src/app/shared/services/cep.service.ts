import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICEP } from '../interfaces/shared.interface';
import { VIA_CEP_API } from 'src/app/app.api';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CEPService {
  constructor(private httpClient: HttpClient) {}

  public getAddress(cep: string): Observable<ICEP> {
    return this.httpClient.get<ICEP>(`${VIA_CEP_API}${cep}/json`);
  }
}
