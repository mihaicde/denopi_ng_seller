import { ThemeNavHomeComponent } from './components/theme-nav/theme-nav-home/theme-nav-home.component';
import { ThemeNavLogoComponent } from './components/theme-nav/theme-nav-logo/theme-nav-logo.component';
import { ThemeNavSiteDesignComponent } from './components/theme-nav/theme-nav-site-design/theme-nav-site-design.component';
import { ThemeNavPagesComponent } from './components/theme-nav/theme-nav-pages/theme-nav-pages.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { ThemeMainComponent } from './components/theme-main/theme-main.component';

// PAGES
import { ThHomeComponent } from './pages/th-home/th-home.component';
import { ThContactComponent } from './pages/th-contact/th-contact.component';
import { ThAboutComponent } from './pages/th-about/th-about.component';
import { ThHelpComponent } from './pages/th-help/th-help.component';
import { ThStoreComponent } from './pages/th-store/th-store.component';
import { ThScheduleComponent } from './pages/th-schedule/th-schedule.component';


const routes: Routes = [
  {
    path: 'main', component: ThemeMainComponent, children: [
      { path: '', component: ThHomeComponent},
      { path: 'home', component: ThHomeComponent},
      { path: 'contact', component: ThContactComponent },
      { path: 'about', component: ThAboutComponent },


      { path: 'ThHome', component: ThemeNavHomeComponent, outlet: 'design' },
      { path: 'pages', component: ThemeNavPagesComponent, outlet: 'design' },
      { path: 'logo', component: ThemeNavLogoComponent, outlet: 'design' },
      { path: 'siteDesign', component: ThemeNavSiteDesignComponent, outlet: 'design' }
      
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
