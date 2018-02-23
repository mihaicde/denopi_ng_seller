import { HomePageModel } from './../models/home.model';
import { SitePreviewModel } from './../models/sitePreview.model';
import { HeaderModel } from './../models/header.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SitePreviewSrv{

    private previewSite: SitePreviewModel = new SitePreviewModel(
        true,
        new HeaderModel("Test","test test", true, "left", " "),
        2,
        ["contact","home"],
        new HomePageModel(["JumbotronModel","HeaderModel"])
        )
    
       
    constructor(){
        this.previewSite.header.titlePresent=true;
        this.previewSite.sections=1;
    }

    public getPreviewModel(){
        return this.previewSite;
    }

    public setPreviewModel(previewSite){
        this.previewSite=previewSite;
    }

   

  
}