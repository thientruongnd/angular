import  { Directive, ElementRef, Renderer, HostListener, Input } from "@angular/core";

@Directive({
	selector: '[zvnHighlight]',
	host: { 
		'(click)': 'onClick($event)' 
	}
})

export class HighlightDirective {

	@Input("zvnHighlight") highLightColor: string;
	@Input("defaultColor") defaultColor: string = "yellow";


	constructor(private el: ElementRef, private renderer: Renderer){
		
	}

	@HostListener('mouseenter') onMouseEnter(){
		this.highlight(this.highLightColor || this.defaultColor);
	}

	@HostListener('mouseleave') onMouseLeave(){
		this.highlight(null);
	}

	// @HostListener('click', ['$event']) onClick(btn) {
	// 	console.log(btn);
	// }

	onClick(event: any) {
		console.log(event.target.innerText);
	}


	private highlight(color: string) {
		this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
		this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'hand');
	}
}