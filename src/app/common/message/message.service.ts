import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class MessageService {

  private value: Subject<any> = new Subject<any>();

  public constructor() {
  }

  public setVal(val: any): void {
    this.value.next(val);

  }

  public getVal(): Observable<any> {
    return this.value.asObservable();
  }


}
