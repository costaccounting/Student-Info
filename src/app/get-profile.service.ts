import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetProfileService {

  constructor(private http: HttpClient) { 
  
  }
  getMyProfile(){
    return this.http.get("./assets/profile.json");
  }
}
