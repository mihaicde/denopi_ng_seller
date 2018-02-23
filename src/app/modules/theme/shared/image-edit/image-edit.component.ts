import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.scss']
})
export class ImageEditComponent{

 @Input() height: string="200px";
  @Input() imageSrc: string = "";
  @Input() width:string="500px";
  @Output() loadedImageSrc = new EventEmitter();

    activeColor: string = 'green';
    baseColor: string = '#ccc';
    overlayColor: string = 'rgba(255,255,255,0.5)';
    
    dragging: boolean = false;
    loaded: boolean = false;
    imageLoaded: boolean = false;
  
    constructor(){
        
    }
    
    handleDrop(e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    }
    
    handleImageLoad() {
        this.imageLoaded = true; 
    }

    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();

        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }

        this.loaded = false;
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    
    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
        //upload to server here

        this.loadedImageSrc.emit(this.imageSrc)
    }
}