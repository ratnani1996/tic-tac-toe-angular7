import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  @Input() public currentPlayer : number;
  @Input() public scoreX : number;
  @Input() public scoreO : number;
  @Input() public draws : number; 
  constructor() { }

  ngOnInit() {
  }

}
