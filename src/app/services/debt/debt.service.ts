import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DebtService {
  private apiUrl = 'https://ms-debt-manager.jcuervom.engineer/api/debts';

  constructor(private http: HttpClient) {}

  // Obtener todas las deudas
  getDebts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Añadir una nueva deuda
  addDebt(debt: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, debt);
  }

  // Eliminar una deuda
  deleteDebt(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
