import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bot } from '../api';
import { BotService } from '../bot.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit, DoCheck{
  bot: Bot | undefined;

  constructor(
    private route: ActivatedRoute,
    private botService: BotService
  ) { }
  ngDoCheck(): void {
    if (this.bot != undefined && this.bot.id != this.route.snapshot.paramMap.get("id")){
      this.getPlayer();
    }
  }

  bots: Bot[] = [];

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer(): void {
    const id = String(this.route.snapshot.paramMap.get("id"));
    this.botService.getBot(id)
      .subscribe(bot => this.bot = bot)
  }

}
