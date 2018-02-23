import { SitePreviewSrv } from './../../services/sitePreview.service';


import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { SitePreviewModel } from './../../models/sitePreview.model';

@Component({
  selector: 'app-theme-nav',
  templateUrl: './theme-nav.component.html',
  styleUrls: ['./theme-nav.component.css']
})
export class ThemeNavComponent implements OnInit {
  
  private sitePreview: SitePreviewModel;
  constructor(public sitePreviewSrv:SitePreviewSrv) { }

  ngOnInit() {
    this.sitePreview = this.sitePreviewSrv.getPreviewModel();
    this.sitePreview.navHomePage=true;
    this.sitePreviewSrv.setPreviewModel(this.sitePreview);
  }

  onChangePage(){
    this.sitePreview.navHomePage=false;
    this.sitePreviewSrv.setPreviewModel(this.sitePreview);

  }

}
