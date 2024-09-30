import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.API_URL;

  private authenticatedSubject = new BehaviorSubject<boolean>(
    this.isAuthenticated()
  );
  authStatus$ = this.authenticatedSubject.asObservable();

  constructor(public http: HttpClient, private router: Router) {}

  login(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'login/', data).pipe(
      tap((response: any) => {
        this.authenticatedSubject.next(true);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.authenticatedSubject.next(false); // Update authentication status
    this.router.navigate(['/login']); // Redirect to login page
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  addContact(data: any) {
    return this.http.post(this.apiUrl + 'contacts/', data);
  }
}
