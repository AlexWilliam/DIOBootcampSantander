import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    apiURL = "https://sheet.best/api/sheets/c0fef39a-dfe3-4e78-a1ca-3518b8456e1c";
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    }

    constructor(private httpClient: HttpClient) { }

    // Lista usuário único
    getUser(id: number): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`);
    }

    // Salva usuário no banco - CREATE
    postUser(user: User): Observable<User> {
        return this.httpClient.post<User>(this.apiURL, user, this.httpOptions);
    }

    // retorna a lista de usuários - READ
    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.apiURL);
    }

    // atualiza o usuário - UPDATE
    updateUser(id: number, user: User): Observable<User> {
        return this.httpClient.put<User>(`${this.apiURL}/id/${id}`, user, this.httpOptions);
    }

    // exclui o usuário do banco - DELETE
    deleteUser(id: number): Observable<User> {
        return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`);
    }
}
