import { Component } from '@angular/core';

@Component({
  selector: 'app-newu-ser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {

  constructor() { }

  onSubmit(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const name = (target.querySelector('#name') as HTMLInputElement).value;
    const mobileNumber = (target.querySelector('#mobileNumber') as HTMLInputElement).value;
    const email = (target.querySelector('#email') as HTMLInputElement).value;
    const password = (target.querySelector('#password') as HTMLInputElement).value;
    //const  password = (target.querySelector('#password') as HTMLInputElement).value;    
    const address = (target.querySelector('#address') as HTMLTextAreaElement).value;
    const pincode = (target.querySelector('#pincode') as HTMLInputElement).value;

    console.log('Name:', name);
    console.log('Mobile Number:', mobileNumber);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Pincode:', pincode);
  }
}
