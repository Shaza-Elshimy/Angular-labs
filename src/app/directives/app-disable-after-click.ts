import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppDisableAfterClick]',
})
export class AppDisableAfterClick {
  constructor(private el:ElementRef,private renderer:Renderer2) {}

  @HostListener('click')
  handleClick(){
    this.renderer.setProperty(this.el.nativeElement,'disabled',true)
    this.renderer.setProperty(this.el.nativeElement,'innerText','Proccessing...')

    setTimeout(()=>{
        this.renderer.setProperty(this.el.nativeElement,'disabled',false)
        this.renderer.setProperty(this.el.nativeElement,'innerText','Click Me')
    },3000)
  }
}
