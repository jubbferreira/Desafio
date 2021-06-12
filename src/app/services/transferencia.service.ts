import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias/';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(Transferencia: Transferencia) {
    this.hidratar(Transferencia);
    return this.httpClient.post<Transferencia>(this.url, Transferencia);
  }

  todas() {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  private hidratar(Transferencia: Transferencia) {
    Transferencia.data = new Date();
  }
}