import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '../models/message';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public message : Message;
  public messages : Message[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {
    this.message = new Message('', 'assets/images/user.png','user',new Date());
    this.messages = [
      new Message('Welcome to chatbot universe', 'assets/images/bot.png','bot', new Date())
    ];
  }
  
  }
