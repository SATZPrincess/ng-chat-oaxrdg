import { Component, ViewChild } from '@angular/core';
import { ChatAdapter, User } from 'ng-chat';
import { DemoAdapter } from './demo-adapter';
import { IChatController, ChatParticipantType, ChatParticipantStatus } from 'ng-chat';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('ngChatInstance', {static: true})
  protected ngChatInstance: IChatController;
  user: User = {
      participantType: ChatParticipantType.User,
      id: 10,
      displayName: "Aryana Stark",
      avatar: "https://66.media.tumblr.com/avatar_9dd9bb497b75_128.pnj",
      status: ChatParticipantStatus.Online
    }
  name = 'Angular';
  userId = 999;
  public adapter: ChatAdapter = new DemoAdapter();

  openUserChat() {
    this.ngChatInstance.triggerOpenChatWindow(this.user);
  }
}
