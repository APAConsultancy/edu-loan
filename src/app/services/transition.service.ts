import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {
  private transitioning = new BehaviorSubject<boolean>(false);
  isTransitioning$ = this.transitioning.asObservable();

  startTransition() {
    this.transitioning.next(true);
    setTimeout(() => {
      this.transitioning.next(false);
    }, 2000); // Show transition for 2 seconds
  }
  constructor() { }
}
