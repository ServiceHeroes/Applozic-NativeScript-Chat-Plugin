import { Observable } from 'tns-core-modules/data/observable';
import { ApplozicChat } from 'nativescript-applozic-chat';

export class HelloWorldModel extends Observable {
  public message: string;
  private applozicChat: ApplozicChat;

  constructor() {
    super();

    this.applozicChat = new ApplozicChat();
    this.message = this.applozicChat.message;

    var alUser = {
        'userId' : 'debug4',   //Replace it with the userId of the logged in user
        'password' : 'debug4',  //Put password here
        'authenticationTypeId' : 1,
        'applicationId' : 'applozic-sample-app',  //replace "applozic-sample-app" with Application Key from Applozic Dashboard
        'deviceApnsType' : 0    //Set 0 for Development and 1 for Distribution (Release)
    }
    this.applozicChat.login(alUser);
  }
}