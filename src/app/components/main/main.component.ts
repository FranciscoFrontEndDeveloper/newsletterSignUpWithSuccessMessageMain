import { Component } from '@angular/core';

import { ImageComponent } from "../image/image.component";
import { FornComponent } from "../forn/forn.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    imports: [ ImageComponent, FornComponent]
})
export class MainComponent {}
