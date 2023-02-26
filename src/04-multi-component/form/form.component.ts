import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  text = '';

  @Output() onSubmit = new EventEmitter<string>();

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.onSubmit.emit(this.text);
    this.text = '';
  }
}
