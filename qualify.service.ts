import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QualifyService {
  @Input()
  name!: string;

  constructor() {
    let dataLength = 6;
    let page = 1;
    let startPagePosition = page * dataLength - dataLength;
    let endPagePosition = page * dataLength;
    endPagePosition =
      this.data1.length < endPagePosition
        ? this.data1.length
        : endPagePosition; //For last row

    for (let con = startPagePosition; con < endPagePosition; con++) {
      this.newDataset.push(this.data1[con]);
    }
  }
  newDataset: any[] = [];
  public data1 :any[]= [];
  loadPage(page: number) {
    let dataLength = 6;
    // let page = 2;
    let startPagePosition = page * dataLength - dataLength;
    let endPagePosition = page * dataLength;
    endPagePosition =
      this.data1.length < endPagePosition
        ? this.data1.length
        : endPagePosition;
    this.newDataset = [];
    for (let con = startPagePosition; con < endPagePosition; con++) {
      this.newDataset.push(this.data1[con]);
    }
  }
}
