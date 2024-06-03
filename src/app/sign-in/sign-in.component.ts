import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user = {
    username: '',
    password: ''
  };

  onSubmit()
  {
    console.log('User signed in:',this.user);
  }
}
