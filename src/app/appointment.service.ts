import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:3000/api/v1/appointments';
  constructor(private http: HttpClient) { }

  getAppointments(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get<any>(url);
  }

  getAppointment(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(`${this.apiUrl}`);
  }

  createAppointment(contact: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, contact);
  }

  updateAppointment(id: string, contact: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url,contact);
  }

  deleteAppointment(id:string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
