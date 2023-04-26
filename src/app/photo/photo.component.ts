import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {


@Input() photo;
@Output() upVotedEvent = new EventEmitter<string>();

  votes:number = 0;


  upVote(title):void{
      console.log('upvoted');
      this.votes+=1;
      this.upVotedEvent.emit(title);


    }



  ngOnInit(){

  }


}
