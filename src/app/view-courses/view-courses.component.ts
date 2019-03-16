import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {
    
  @Input() courses;
  chosen: boolean = false;
  selectedCourse = '';
  

  constructor() { }

  ngOnInit() {
  }
  selectItem(stuff) { 
        this.selectedCourse = stuff;
        this.chosen = true;
        //console.log(this.selectedCourse);
    
    }

}
