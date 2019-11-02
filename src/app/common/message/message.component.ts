import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {MessageService} from './message.service';
import {MessageModel} from './message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {

  // createMessage(type: string): void {
  //   this.message.create(type, `This is a message of ${type}`);
  // }
  messageModel: MessageModel;

  constructor(private message: NzMessageService,
              private messageService: MessageService,
  ) {
  }

  ngOnInit() {
    this.messageService.getVal().subscribe(res => {
      if (res) {
        this.messageModel = res;
        this.message.create(this.messageModel.type, this.messageModel.content);
      }
    });
  }
}

