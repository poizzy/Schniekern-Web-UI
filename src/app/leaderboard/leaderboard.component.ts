import { Component, OnInit } from '@angular/core';
import { Bot } from '../api';
import { BotService } from '../bot.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})

export class LeaderboardComponent implements OnInit {

  faUser = faUser;
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
