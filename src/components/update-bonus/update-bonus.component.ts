import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'update-bonus',
  templateUrl: './update-bonus.component.html',
})
export class UpdateBonusComponent {
  @ViewChild("captionText") captionText!: ElementRef<HTMLHeadingElement>;
  @ViewChild("button") button!: ElementRef<HTMLButtonElement>;
  @Input() typeString!: string;
  @Input() caption!: string;
  @Input() game!: string;
  @Input() color!: string;
  @Input() altColor!: string;
  ngAfterViewInit(): void {
    if(this.altColor !== ""){
      this.button.nativeElement.style.background = `linear-gradient(to top right, ${this.color}, ${this.altColor})`;
    } else this.button.nativeElement.style.background = this.color;
    if(this.game !== "") this.captionText.nativeElement.innerHTML = `
      ${this.caption.replace(this.game, `<span style="color: ${this.color}">${this.game}</span>`)}
    `;
  }
}
