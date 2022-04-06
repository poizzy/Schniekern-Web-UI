import { Component, OnInit } from '@angular/core';
import { Bot } from '../api';
import { BotService } from '../bot.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})

export class LeaderboardComponent implements OnInit {

  constructor(private botService: BotService) { }
  
  bots: Bot[] = [];

  ngOnInit(): void {
    this.getBots();
  }
  getBots(): void {
    this.botService.getPlayer()
        .subscribe(bots => this.bots = bots.sort((a, b) => b.won - a.won));
    
  }
}
