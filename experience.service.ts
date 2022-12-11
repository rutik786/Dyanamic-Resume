import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() {
    let dataLength = 6;
    let page = 1;
    let startPagePosition = page * dataLength - dataLength;
    let endPagePosition = page * dataLength;
    endPagePosition =
      this.data2.length < endPagePosition
        ? this.data2.length
        : endPagePosition; //For last row

    for (let con = startPagePosition; con < endPagePosition; con++) {
      this.newDataset.push(this.data2[con]);
    }
  }
  newDataset: any[] = [];
  public data2 :any[] = [];
  loadPage(page: number) {
    let dataLength = 6;
    // let pageNumber = 2;
    let startPagePosition = page * dataLength - dataLength;
    let endPagePosition = page * dataLength;
    endPagePosition =
      this.data2.length < endPagePosition
        ? this.data2.length
        : endPagePosition;
    this.newDataset = [];
    for (let con = startPagePosition; con < endPagePosition; con++) {
      this.newDataset.push(this.data2[con]);
    }
  }
}
