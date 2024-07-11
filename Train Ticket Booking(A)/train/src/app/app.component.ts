import { Block } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customer } from './model/train';
import { FormsModule } from '@angular/forms';
import { TrainService } from './service/train.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loginObj: any = {
    phone: '',
    password: '',
  };

  loggedUser: Customer =  new Customer()

  registerObj: Customer = new Customer();
  constructor(private trainService: TrainService) {
    const localData = localStorage.getItem('trainApp');
    if (localData != null) {
      this.loggedUser = JSON.parse(localData);
      
    }

  }
  openRegester() {
    const model = document.getElementById('regestrationModel');
    if (model != null) {
      model.style.display = 'block';
    }
  }

  openLogin() {
    const model = document.getElementById('loginModel');
    if (model != null) {
      model.style.display = 'block';
    }
  }
  
  closeRegester() {
    const model = document.getElementById('regestrationModel');
    if (model != null) {
      model.style.display = 'none';
    }
  }

  closeLogin() {
    const model = document.getElementById('loginModel');
    if (model != null) {
      model.style.display = 'none';
    }
  }

  onRegester() {
    this.trainService
      .createNewCustomer(this.registerObj).subscribe((res: any) => {
        if (res.result) {
          alert('Regestration Success');
          this.closeRegester()
        } else {
          alert(res.message);
        }
      });
  }
  onLogin() {
    this.trainService.onLogin(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert('login Success');
        localStorage.setItem('trainApp', JSON.stringify(res.data));
        this.loggedUser = res.data
        this.closeLogin()
      } else {
        alert(res.message);
      }
    });
  }
  onlogOff(){
    this.loggedUser = new Customer()
     localStorage.removeItem('trainApp')
  }
}
