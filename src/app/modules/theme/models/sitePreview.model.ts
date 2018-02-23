import { HomePageModel } from './home.model';
import { HeaderModel } from './header.model';

export class SitePreviewModel{
    constructor(
        public navHomePage:boolean,
        public header: HeaderModel,
        public sections: number,
        public pages: Array<string>,
        public homeModel: HomePageModel
        )
        {}
}