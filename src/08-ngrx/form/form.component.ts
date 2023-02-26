import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListActions, setText } from '../app.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  text: string = '';

  constructor(private store: Store<{ text: string }>) {
    store.select('text').subscribe((text) => {
      this.text = text;
    });
  }

  handleChange(event: Event) {
    const target = <HTMLTextAreaElement>event.target;
    this.store.dispatch(setText({ text: target.value }));
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.store.dispatch(ListActions.addTask({ text: this.text }));
  }
}
