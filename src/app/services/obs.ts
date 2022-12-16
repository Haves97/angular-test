import { Observable } from "rxjs";


export const functObserver = new Observable(observer => {
    console.log('functObserver');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() =>  observer.next(50), 3000);
});