import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // safeURL:SafeResourceUrl;
  // videoURL = 'https://www.youtube.com/watch?v=_zFxtK4EMnA';

  constructor(private _sanitizer: DomSanitizer) {
    // this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);

   }

  ngOnInit(): void {
  }

}
