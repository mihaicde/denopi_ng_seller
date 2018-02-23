import { LoaderService } from './services/loader.serrvice';
import { FormsModule } from '@angular/forms';

import { ThemeNavSiteDesignComponent } from './components/theme-nav/theme-nav-site-design/theme-nav-site-design.component';
import { ThemeNavPagesComponent } from './components/theme-nav/theme-nav-pages/theme-nav-pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeRoutingModule } from './theme-routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { SharedModule } from '../shared/shared.module';

// COMPONENTS
import { ThemeNavComponent } from './components/theme-nav/theme-nav.component';
import { ThemeMainComponent } from './components/theme-main/theme-main.component';

// PAGES
import { ThHomeComponent } from './pages/th-home/th-home.component';
import { ThContactComponent } from './pages/th-contact/th-contact.component';
import { ThAboutComponent } from './pages/th-about/th-about.component';
import { ThHelpComponent } from './pages/th-help/th-help.component';
import { ThStoreComponent } from './pages/th-store/th-store.component';
import { ThScheduleComponent } from './pages/th-schedule/th-schedule.component';

//SERRVICES
import { SitePreviewSrv } from './services/sitePreview.service';
import { HeaderComponent } from './shared/header/header.component';
import { ThemeNavLogoComponent } from './components/theme-nav/theme-nav-logo/theme-nav-logo.component';
import { ImageEditComponent } from './shared/image-edit/image-edit.component';
import { ThemeNavHomeComponent } from './components/theme-nav/theme-nav-home/theme-nav-home.component';
import { JumbotronModelComponent } from './sections/jumbotron-model/jumbotron-model.component';



@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    MaterializeModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    ThemeNavComponent,
    ThemeMainComponent,
    ThHomeComponent,
    ThContactComponent,
    ThAboutComponent,
    ThHelpComponent,
    ThStoreComponent,
    ThScheduleComponent,
    ThemeNavPagesComponent,
    ThemeNavSiteDesignComponent,
    HeaderComponent,
    ThemeNavLogoComponent,
    ImageEditComponent,
    ThemeNavHomeComponent,
    JumbotronModelComponent,
    

  ],
    providers: [
    SitePreviewSrv,
    LoaderService

  ],
  entryComponents: [ JumbotronModelComponent ],
})
export class ThemeModule { }
