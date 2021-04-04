import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/service/music.service';
import { IVideo } from '../../../assets/models/yvideo';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusiclistComponent implements OnInit {

  videos: Array<IVideo> = [];

  constructor(private musicService: MusicService, private dom: DomSanitizer) {
  }

  ngOnInit(): void {
  }
  SearchVideo(event: any) {
    let video = [];
    let query = event.target.value || "";
    console.log(query);
    this.musicService.SearchData(query).subscribe(response => {
      console.log(response);
      let items = response['items'];
      items.forEach(element => {
        console.log("ID : " + element['id'].videoId);
        // this.video.push({
        //   id: element['id'].videoId,
        //   title: element['snippet'].title,
        //   description: element['snippet'].description
        // })
        video.push({
          id: element['id'].videoId,
          title: element['snippet'].title,
          description: element['snippet'].description
        });
        this.videos = video;
      });
      console.log(this.videos);
    });
  }
  domVid(ytId: any) {
    return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + ytId);
  }

}
