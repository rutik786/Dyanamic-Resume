import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  @Input()
  name!: string;

  constructor() { }
  public data5: any = [];

}
