import { Component, Input } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent{
  @Input() isActive : Boolean;
  @Input() likesCount : number;
  handleLike(){
    this.likesCount += this.isActive ? -1 : +1
    this.isActive = !this.isActive;
  }
}
