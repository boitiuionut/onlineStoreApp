import { SupportServiceService } from './../../services/support-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: ['./support-page.component.css']
})
export class SupportPageComponent implements OnInit {

  supportForm: FormGroup;

  constructor(
    private msg: MessengerService,
    private builder: FormBuilder,
    private supportService: SupportServiceService) { }
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.supportForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      fullname: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  submitMessage() {
    this.supportService.addCustomerMessage(this.supportForm.value).subscribe(() => {
      this.msg.sendMsg(this.supportForm.value);
    });
    
    window.alert('Mesajul s-a trimis cu succes!');
    this.resetForm();

  }

  resetForm(){
    this.supportForm = this.builder.group({
      email: '',
      fullname: '',
      message: ''
    })
  }

}
