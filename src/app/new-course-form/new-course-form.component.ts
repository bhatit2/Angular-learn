import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  constructor(fb : FormBuilder){
    this.form = fb.group({
      name : [],
      contact : fb.group({
        email : [],
        phone : []
      }),
      topics : fb.control({
        
      })
    })
  }
  form = new FormGroup({
    topics: new FormArray([])
  });

  /*addTopic(topic : HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  } */
  get topics(){
    return this.form.get('topics') as FormArray;
  } 
}
