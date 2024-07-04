import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import User from '../../tyspes/users';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router,private route:ActivatedRoute){

  }
  editUserId!: string
  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.editUserId = this.route.snapshot.params['id']

    if(this.editUserId){
      this.userService.getUser(this.editUserId).subscribe(result=>{
        this.userForm.patchValue(result)
      })
    }
  }
  userForm :FormGroup = this.formBuilder.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    age:['',Validators.required],
    address:['',Validators.required]
  })

  addUser(){
    if (this.userForm.invalid) {
      alert('please provide all filed with valid data')
      return;
    }
    const model:User = this.userForm.value;
    this.userService.addUser(model).subscribe(result=>{
      alert('User add Successfuly')
      this.router.navigateByUrl('/')
    })  

  }
  updateUser(){
    if (this.userForm.invalid) {
      alert('please provide all filed with valid data')
      return;
    }
    const model:User = this.userForm.value;
    this.userService.updateUser(this.editUserId,model).subscribe(result=>{
      alert('User Update Successfuly')
      this.router.navigateByUrl('/')
    })
  }
}
