import { Router, ActivatedRoute } from '@angular/router';
import { SitePreviewModel } from './../../../models/sitePreview.model';
import { SitePreviewSrv } from './../../../services/sitePreview.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-theme-nav-logo',
  templateUrl: './theme-nav-logo.component.html',
  styleUrls: ['./theme-nav-logo.component.scss']
})
export class ThemeNavLogoComponent implements OnInit {

  private sitePreview:SitePreviewModel;
  private centerLogo:boolean=false;
  private routeAlt: String ='contact';
  
  constructor(
    private sitePreviewSrv:SitePreviewSrv,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.sitePreview=this.sitePreviewSrv.getPreviewModel();
    this.sitePreview.navHomePage=false;
   
    
  }


  goBack() {
     this.routeAlt=window.location.pathname
     this.routeAlt=window.location.pathname.substring(this.routeAlt.lastIndexOf("(")+1, this.routeAlt.lastIndexOf(")"))

     if( this.routeAlt === this.routeAlt+":"+this.route.snapshot.url[0].path)
        this.routeAlt=""
      else
        this.routeAlt=this.routeAlt.substring(0,this.routeAlt.indexOf("/"));
  
    this.router.navigate([{ outlets: { design: '' }}] , {relativeTo:this.route})
     .then(() => this.router.navigate(['/theme/main/'+this.routeAlt+'']));

    this.sitePreviewSrv.getPreviewModel().navHomePage=true;
    
  }
  

  handleImageUpdate(imgSrc)
  {     
    this.sitePreview.header.logoSrc=imgSrc;
    this.sitePreviewSrv.setPreviewModel(this.sitePreview);

  }

  onChange()
  {
    if ( this.centerLogo == false)
      this.sitePreview.header.center="center"
    else 
      this.sitePreview.header.center="left"
  }


}
