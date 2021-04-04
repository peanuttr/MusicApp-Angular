import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MusicService {

  API_URL = "https://www.googleapis.com/youtube/v3/search";
  API_KEY = "AIzaSyBAp3d1zOlGnxPufb_9e9VFP4SwSdPl9vE";

  constructor(private Httpclinet: HttpClient) {
  }
  SearchData(query: any) {
    console.log(query);

    return this.Httpclinet.get(`${this.API_URL}?key=${this.API_KEY}&type=video&part=snippet&q=${query}&maxResults=10`)
  }
}
