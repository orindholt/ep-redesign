import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent{
  @Output() active = new EventEmitter<boolean>();
  submitFunc(){window.location.reload()}
}
