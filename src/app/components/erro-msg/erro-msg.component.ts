import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro-msg',
  templateUrl: './erro-msg.component.html',
  styleUrls: ['./erro-msg.component.css']
})
export class ErroMsgComponent implements OnInit {

  public error!: any;

  constructor() { }

  ngOnInit(): void {
  }

  setError(error: any, tempo: number = 5000) {
    this.error = error;
    setTimeout(() => {
      this.error = null;
    }, tempo);
  }

}
