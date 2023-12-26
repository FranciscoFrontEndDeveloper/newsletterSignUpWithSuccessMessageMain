import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
})
export class ImageComponent {
  public imageForm!: string;

  // @HostListener('window:click')
  // onclick() {
  //   console.log('click');
  // }
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 1024) {
      this.imageForm = 'assets/images/illustration-sign-up-desktop.svg';
    } else {
      this.imageForm = 'assets/images/illustration-sign-up-mobile.svg';
    }
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.changeImage();
    this.onResize();
  }
}
