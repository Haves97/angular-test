import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { functObserver } from './services/obs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    this.drink();
  }

  ngOnInit(): void {
    let source$ = new Observable(observer => {
      observer.next('a');
      observer.next('b');
      observer.error('error');
      observer.next('c');
      observer.next('d');
    });

    source$.pipe(
      catchError((error: any) => of(1,2,3,4)))
     .subscribe(
      data => console.log(data),
      () => 'complate!'
      )
  }

 drink() {
  functObserver.subscribe(data => console.log(data))
  functObserver.subscribe(data => console.log(data))
 }
 

  title = 'simpleCRM';
  username ='';
  success_msg = true;
  eDate = Date.now();

  

  contacts = [
    {
      'firstName': 'ARC',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'Marc',
      'lastName': 'Hender',
      'contactId': 67676
    },
    {
      'firstName': 'Ben',
      'lastName': 'Stokes',
      'contactId': 3434
    }
  ];
}
