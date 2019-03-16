import { Component, OnInit } from '@angular/core';
import  { GetProfileService } from './get-profile.service';


@Component({
  selector: 'app-root',
  providers: [GetProfileService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Assignment 2';
  mydata: any = [];
  show: boolean = false;
  listcourses = '';
  constructor( private getmydata: GetProfileService ) {}
  ngOnInit() {
        this.getmydata.getMyProfile().subscribe(
        data => { this.mydata = data as string []; 
        
        },
        err => { //console.log('Error'); 
        },
        () => { //console.log('Completed'); 
        }
        );
        
    }
     
    putcourses(stuff) { 
        this.listcourses = stuff;
        this.show = true;
        
    
    } 

}
