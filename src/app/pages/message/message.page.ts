import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  contents = "";
  messages = [];

  constructor() { }

  sendMessage(){
    let messages = {
      contents:this.contents
    }
    this.messages.push(messages);
    this.clearField();
  }
  clearField(){
    this.contents = "";

  }

  ngOnInit() {
  }
  

}
