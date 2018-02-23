import { LoaderService } from './../../../services/loader.serrvice';
import { ActivatedRoute, Router } from '@angular/router';
import { SitePreviewSrv } from './../../../services/sitePreview.service';
import { Component, OnInit, ViewChild, ViewContainerRef  } from '@angular/core';
import { SitePreviewModel } from './../../../models/sitePreview.model';

@Component({
  selector: 'app-theme-nav-home',
  templateUrl: './theme-nav-home.component.html',
  styleUrls: ['./theme-nav-home.component.scss']
})
export class ThemeNavHomeComponent implements OnInit {
  private sitePreview: SitePreviewModel;
  private routeAlt: String ='contact';
  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
  //View children si query list
  constructor( 
    private sitePreviewSrv: SitePreviewSrv,
    private router: Router,
    private route: ActivatedRoute,
    private loader: LoaderService) { 
      this.loader=loader;
    }

  ngOnInit() {
     this.sitePreview = this.sitePreviewSrv.getPreviewModel();
     console.log(this.sitePreview.homeModel.sections);

     this.loader.setRootViewContainerRef(this.viewContainerRef)
     this.loader.addDynamicComponent()
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


  goToSection(location: string){

    window.location.hash = ''; 
    window.location.hash = "sect"+location;

}





}
