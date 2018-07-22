export class Message {
    content: string;
    timestamp: Date;
    avatar: string;
    sender: string;
    wait: boolean;

    constructor(content: string, avatar: string, sender: string, wait: boolean, timestamp?: Date ) {
      this.content = content;
      this.timestamp = timestamp;
      this.avatar = avatar;
      this.sender = sender;
      this.wait = wait;
    }
  }
