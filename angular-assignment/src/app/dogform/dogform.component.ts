import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dogform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dogform.component.html',
  styleUrl: './dogform.component.css'
})
export class DogformComponent {
  submitted: boolean = false; // To track form submission

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    favouriteBreed: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  });
  
    constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      favouriteBreed: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.submitted = true; // Set flag when form is submitted
    if (this.profileForm.valid) {
      window.alert("Thanks for sharing your favourite breed")
    }
  }

  get name() {
    return this.profileForm.get('name');
  }

  get favouriteBreed() {
    return this.profileForm.get('favouriteBreed');
  }

  get email() {
    return this.profileForm.get('email');
  }
}
