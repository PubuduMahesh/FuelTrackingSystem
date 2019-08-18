import {Pipe,PipeTransform} from '@angular/core';


@Pipe({
	name:'formatDate'
})

export class FormatDate implements PipeTransform{
	transform(value:string){
		console.log(value);
	}

}