import { SitePreviewSrv } from './../../services/sitePreview.service';
import { SitePreviewModel } from './../../models/sitePreview.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sitePreview-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  private sitePreview: SitePreviewModel;

  @Input() title:string="Title";
  @Input() pages:Array<string>=["Page1","Page2"]

  constructor(private sitePreviewSrv: SitePreviewSrv,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.sitePreview=this.sitePreviewSrv.getPreviewModel();  
  }

   navigateToPage(page){
    this.router.navigate([page], {relativeTo:this.route.parent});
  }
  

}
