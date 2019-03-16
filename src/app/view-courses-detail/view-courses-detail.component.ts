import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-courses-detail',
  templateUrl: './view-courses-detail.component.html',
  styleUrls: ['./view-courses-detail.component.css']
})
export class ViewCoursesDetailComponent implements OnInit {

    
  @Input() showDetail;
  
  constructor() { }
    
  ngOnInit() {
    setTimeout(() => {
         console.log(this.showDetail);
     });
  
  
    }

}
