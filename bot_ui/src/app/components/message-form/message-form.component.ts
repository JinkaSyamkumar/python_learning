import { RasastackService } from './../../services/rasastack.service';

import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  @Input('message')
  private message : Message;
  @Input('messages')
  private messages : Message[];

  constructor(private _rasastackService: RasastackService) { }

  ngOnInit() {
  }
  public sendMessage(): void {
    this.message.timestamp = new Date();
    console.log(this.message.content)
    this.messages.push(this.message);
    this._rasastackService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res[0]['text'], 'assets/images/bot.png', 'bot',this.message.timestamp)
      );
    });
    this.message = new Message('', 'assets/images/user.png','user',this.message.timestamp);
  }
}