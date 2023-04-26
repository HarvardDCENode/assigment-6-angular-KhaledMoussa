import { Component, OnInit } from '@angular/core';
import {PhotoService} from './photo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PhotoService]
})
export class AppComponent{

  constructor(private PhotoService:PhotoService){

  }

  title = 'myApp';
  courseName = 'CSCI E-31';
  photoList =null;
  getNumberOfPhotos= 0;




  mostRecentUpvoted:string = '';
  handleUpvoted(e):void{
    console.log("app-component gets upvoted:" +e);
    this.mostRecentUpvoted = e;

  }

  ngOnInit(){
    this.photoList = this.PhotoService.listPhoto();
    this.getNumberOfPhotos = this.photoList.length;
  }




  }
