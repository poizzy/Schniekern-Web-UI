import { Component, OnInit } from '@angular/core';
import { Bot } from './api';
import { BotService } from './bot.service';
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'schniekern_web_application';
  faUser = faUser;
  faHome = faHome


bots: Bot[] = [];

  constructor(private botService: BotService) { }

  ngOnInit(): void {
    this.getBots();
  }

  getBots(): void {
    this.botService.getPlayer()
        .subscribe(bots => this.bots = bots);
  }
}