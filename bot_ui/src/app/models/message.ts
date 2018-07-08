export class Message {
    content: string;
    timestamp: Date;
    avatar: string;
    sender:string;
  
    constructor(content: string, avatar: string, sender :string, timestamp?: Date ){
      this.content = content;
      this.timestamp = timestamp;
      this.avatar = avatar;
      this.sender=sender;
    }
  }