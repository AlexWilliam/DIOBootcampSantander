import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ApiResponse = {
    count: number,
    next: string,
    previous: string,
    results: []
}

@Injectable({
    providedIn: 'root'
})
export class ListApiService {

    apiURL: string = "https://pokeapi.co/api/v2/pokemon";

    constructor(private httpClient: HttpClient) { }

    getList(): Observable<ApiResponse> {
        return this.httpClient.get<ApiResponse>(this.apiURL+"?offset=0&limit=20");
    }
}
