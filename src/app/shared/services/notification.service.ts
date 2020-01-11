import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notification$: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() { }

  public send(text: string): void {
    this.notification$.next(text);
  }

  public subscribeNotification(): Observable<string> {
    return this.notification$;
  }
}
