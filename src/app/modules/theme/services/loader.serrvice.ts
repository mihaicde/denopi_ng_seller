import { JumbotronModelComponent } from './../sections/jumbotron-model/jumbotron-model.component';

import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector
} from '@angular/core'

@Injectable()
export class LoaderService {
  
  rootViewContainer:any;

   constructor(private factoryResolver: ComponentFactoryResolver) { }

  public setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  public addDynamicComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(JumbotronModelComponent)
    const component = factory.create(this.rootViewContainer.parentInjector)
    
    this.rootViewContainer.insert(component.hostView)
  }

}
