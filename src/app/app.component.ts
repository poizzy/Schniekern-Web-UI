import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Bot } from './api';
import { BotService } from './bot.service';
import { faUser, faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'schniekern_web_application';
  faUser = faUser;
  faHome = faHome
  faMagnifyingGlass = faMagnifyingGlass


bots: Bot[] = [];

  constructor(private botService: BotService) { }

  ngOnInit(): void {
    this.getBots();
  }

  getBots(): void {
    this.botService.getPlayer()
        .subscribe(bots => this.bots = bots);
  }

  @Input() search = ""

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
}