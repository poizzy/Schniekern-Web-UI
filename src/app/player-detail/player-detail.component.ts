import { Component, OnInit } from '@angular/core';
import { Bot } from '../api';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  constructor() { }

  bots: Bot[] = [];

  ngOnInit(): void {
  }

}
