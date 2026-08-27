import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
})
export class ImageComponent implements OnInit {
  public imageSrc!: string;

  @HostListener('window:resize')
  onResize() {
    this.imageSrc = window.innerWidth > 1024
      ? 'assets/images/illustration-sign-up-desktop.svg'
      : 'assets/images/illustration-sign-up-mobile.svg';
  }

  ngOnInit(): void {

    this.onResize();
  }
}
