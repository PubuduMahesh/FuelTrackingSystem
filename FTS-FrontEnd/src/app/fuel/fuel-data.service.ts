import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';

import {IFuel} from './fuel';

@Injectable({
  providedIn: 'root'
})
export class FuelDataService {
	//private fuelDataUrl = 'api/fuel/fuel.json';
	private fuelReadDataUrl = 'http://localhost:4000/api/fuel-read';
	private fuelUpdateUrl = 'http://localhost:4000/api/fuel-write';

	constructor(private http:HttpClient){}
	
	getFuelData():Observable<IFuel[]>{
		return this.http.get<IFuel[]>(this.fuelReadDataUrl).pipe(
			tap(data => console.log('All: '+JSON.stringify(data))),
			catchError(this.handleError)
		);
	}

	updateFuelData(fuel:IFuel){
		return this.http.post<IFuel>(this.fuelUpdateUrl,fuel).subscribe(
	      (res) => console.log(res),
	      (err) => console.log(err)
    	);
	}

	private handleError(err:HttpErrorResponse){
		//in a real world app, we may send the server to some remote logging instrastructure.
		//instead of just logging it to the console.

		let errorMessage = '';

		if(err.error instanceof ErrorEvent){
			//A client-side or network error occurred. Handle it acordingly. 
			errorMessage = 'An error occurred: $(err.error.message)';
		}else{
			//The backend returned an unsuccessful response code.
			//the response body may contain clues as to what went wrong,

			errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}'
		}
		console.error(errorMessage);
		return throwError(errorMessage);
	}
  
}
