import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeDBService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getProjects() {
    return this.http.get("https://api.npoint.io/faad12b3eb960c121a01/image")
  }

  find(id: any) {
    return this.http.get(`https://api.npoint.io/faad12b3eb960c121a01/image/${id}`)
  }
}
