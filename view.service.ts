import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  constructor() { }
  // n = this..data3[0].mod1.fname

  // item: any = [];
  public data3 = [
    { id:'',
      mod1: {
      },
      qualification: {
        // _degree: '',
        // _institute: '',
        // _duration: '',
        // _grade: '',
        // _remarks: '',
      },
      experience: {
        // _organization: '',
        // _duration2: '',
        // _role: '',
        // _remarks2: '', 
      },
    },

  ];
  
}
