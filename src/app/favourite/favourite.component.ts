import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favourite',
  template: `<div>
    <span class="shape" 
    (click)="handleClick()"
    [class.empty]="isfavourite"
    >
  </span>
  </div>
`,
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent{
  @Output()
  change = new EventEmitter();
  isfavourite : Boolean = false;
  handleClick(){
    this.isfavourite = !this.isfavourite;
    this.change.emit(this.isfavourite);
  }

}
