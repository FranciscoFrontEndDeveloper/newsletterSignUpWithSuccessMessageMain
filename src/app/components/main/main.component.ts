import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from "../image/image.component";
import { FornComponent } from "../forn/forn.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    imports: [CommonModule, ImageComponent, FornComponent]
})
export class MainComponent {

}
