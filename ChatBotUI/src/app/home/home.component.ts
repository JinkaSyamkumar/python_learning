import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '../models/message';

import { RasastackService } from './../services/rasastack.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public message: Message;
  public messages: Message[];
  @ViewChild('commentEl') comment: ElementRef;
  scrolltop = 0;
  private newmessage: Message;
  private data: any;

  container: HTMLElement;

  constructor(private _rasastackService: RasastackService) {
    this.message = new Message('', 'assets/images/user.png', 'user', false, new Date());
    this.messages = [
      new Message('Welcome to chatbot universe', 'assets/images/bot.png', 'bot', false, new Date())
    ];
  }
  ngOnInit() {
    this.container = document.getElementById('commentEl');
    this.scrolltop = this.container.scrollHeight;
  }

  public sendMessage(): void {
    this.container = document.getElementById('commentEl');
    this.scrolltop = this.container.scrollHeight;
    this.newmessage = new Message(this.message.content, 'assets/images/user.png', 'user', false, new Date());
    this.messages.push(this.newmessage);
    this.messages.push(
      new Message('', 'assets/images/bot.png', 'bot', true)
    );

    this._rasastackService.getResponse(this.message.content).subscribe(res => {

      this.data = res;
      this.messages.pop();

      let respData;
      const k = res[0]['text'];
      console.log(k);
      try {
        respData = JSON.parse(k);
        respData = respData[0]['text'];
      } catch (err) {
        respData = k;
      }
      console.log(respData);
      this.messages.push(
        new Message(respData, 'assets/images/bot.png', 'bot', false, new Date())
      );
      this.container = document.getElementById('commentEl');
      this.scrolltop = this.container.scrollHeight;
    });
    this.message = new Message('', 'assets/images/user.png', 'user', false);
  }
}
