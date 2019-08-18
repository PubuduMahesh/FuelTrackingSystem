import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
@Component({
	selector:'pm-star',
	templateUrl:'./star.component.html',
	styleUrls:['./star.component.css']
})
export class StarComponent implements OnInit{
	@Input() rating:number = 1;
	starWidth: number;
	@Output() notify: EventEmitter<string> = new EventEmitter<string>();

	ngOnInit():void{
		this.starWidth = 75*this.rating/5;
	}

	onClick(){
		this.notify.emit('rating '+this.rating+' was clicked');
	}
}