import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucesso-msg',
  templateUrl: './sucesso-msg.component.html',
  styleUrls: ['./sucesso-msg.component.css']
})
export class SucessoMsgComponent implements OnInit {

  success!: any;

  constructor() { }

  ngOnInit(): void {
  }

  setSuccess(success: any, tempo: number = 5000) {
    this.success = success;
    setTimeout(() => {
      this.success = null;
    }, tempo);
  }

}
