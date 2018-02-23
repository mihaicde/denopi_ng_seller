import { SitePreviewModel } from './../../models/sitePreview.model';
import { SitePreviewSrv } from './../../services/sitePreview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-th-home',
  templateUrl: './th-home.component.html',
  styleUrls: ['./th-home.component.css']
})
export class ThHomeComponent implements OnInit {

  private sitePreview: SitePreviewModel;

  constructor(
     private router: Router,
     private route:ActivatedRoute,
     private sitePreviewSrv:SitePreviewSrv
  ) { }

  ngOnInit() {
    this.sitePreview=this.sitePreviewSrv.getPreviewModel();

  }

  goTo(location: string): void {
    window.location.hash = ''; 
    window.location.hash = location;
}

 
}
