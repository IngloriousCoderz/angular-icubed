import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';

const initialValues = { text: '', completed: false }; // this should not be required but it is!

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form;

  constructor(private fb: FormBuilder, private tasksService: TasksService) {
    this.form = this.fb.group({
      text: ['', Validators.required],
      completed: [false],
    });
  }

  handleSubmit() {
    this.tasksService.addTask(this.form.value).subscribe();
    this.form.reset(initialValues);
  }
}
