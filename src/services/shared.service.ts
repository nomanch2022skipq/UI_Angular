import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }

  public mainColor = 'slate-400';
  public hoverMainColor = 'slate-500'

}
