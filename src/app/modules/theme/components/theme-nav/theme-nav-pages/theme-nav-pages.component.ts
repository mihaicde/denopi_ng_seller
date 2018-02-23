import { SitePreviewSrv } from './../../../services/sitePreview.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SitePreviewModel } from './../../../models/sitePreview.model';
import { PagesModel } from './../../../models/pages.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-theme-nav-pages',
  templateUrl: './theme-nav-pages.component.html',
  styleUrls: ['./theme-nav-pages.component.scss']
})
export class ThemeNavPagesComponent implements OnInit {

  private sitePreview: SitePreviewModel;
  private routeAlt: String ='contact';
  private pages: Array<PagesModel> = [
    { name: "contact", active: "" },
    { name: "home", active: "" },
    { name: "reservation", active: "" },
    { name: "shop", active: "" },
    { name: "discounts", active: "" },
  ];

  constructor(
    private location: Location,
    private sitePreviewSrv: SitePreviewSrv,
    private router: Router,
    private route:ActivatedRoute) { }

  
  ngOnInit() {
     
    this.sitePreview = this.sitePreviewSrv.getPreviewModel();
     for (let i = 0; i < this.sitePreview.pages.length; i++)
       this.pages[this.pages.findIndex(obj => obj.name == this.sitePreview.pages[i])].active = "checked"
   

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


  updatePages(){  
      this.sitePreview.pages=[];
       for(let page of this.pages){
            if ( page.active == "checked"){
              this.sitePreview.pages.push(page.name)
            }
       this.sitePreviewSrv.setPreviewModel(this.sitePreview);
      }

  }

  checkPageValue(page:PagesModel, i:number){

    if (page.active == "")
      page.active="checked"
    else 
      page.active=""
    
    this.pages[i]=page;
    this.updatePages();
   
  }


}

