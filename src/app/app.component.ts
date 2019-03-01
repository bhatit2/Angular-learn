import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  app = {
    title : 'eLearn',
    isFavourite : true
  };
  viewMode : string = 'map';
  courseName : ''
  courses;
  getCourses(){
    this.courses = [
      {id : 1, name : 'course1'},
      {id : 2, name : 'course2'},
      {id : 3, name : 'course3'},
      {id : 4, name : 'course4'}
    ];
  }
  handleChange(isFavourite){
    console.log("handle change called ", isFavourite);
  }
  addCourse(){
    this.courses.push({
      id : this.courses.length + 1,
      name : this.courseName
    });
    this.courseName = ""
  }
  removeCourse(id){
    this.courses = this.courses.filter((course)=>course.id !== id);
  }
  trackCourse(index, course){
    return course ? course.id : undefined;
  }
  
}
