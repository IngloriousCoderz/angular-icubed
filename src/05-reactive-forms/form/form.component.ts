import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

const initialValues = { text: '', completed: false }; // this should not be required but it is!

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form;

  @Output() onSubmit = new EventEmitter<
    Partial<{ text: string | null; completed: boolean | null }>
  >();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: ['', Validators.required],
      completed: [false],
    });
  }

  handleSubmit() {
    this.onSubmit.emit(this.form.value);
    this.form.reset(initialValues);
  }
}
