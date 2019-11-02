export class MessageModel {

  type: string;
  content: string;

  public constructor(type: string, content: string) {
    this.content = content;
    this.type = type;
  }
}
