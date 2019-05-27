import { Component, OnInit } from '@angular/core';
import { Players } from '../players.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit { 
  currentPlayer : number = Players.playerX;
  playerXPosition : number[] = [];
  playerOPosition : number[] = [];
  moves : number = 0;
  public scoreX : number = 0;
  public scoreO : number = 0;
  public draws : number = 0; 
  constructor() { }

  ngOnInit() {
  }
  
  MakeMove(currentCard : number) : void{
    //if the card is already allocated then do nothing
    if( this.Allocated(currentCard) ){
      //do nothing
    }
    else{
      if( this.currentPlayer == Players.playerX ){
        this.playerXPosition.push(currentCard);
        this.moves += 1;
      }
      else if( this.currentPlayer == Players.playerO ){
        this.playerOPosition.push(currentCard);
        this.moves += 1;
      }
      if(this.CheckIfWon()){
        //update scores of the current player
        this.currentPlayer == Players.playerX ? this.scoreX += 1 : this.scoreO += 1;
        if(this.isDraw()){
          this.draws += 1;
        }
        //reset the game
        this.ResetGame();
      }
      else{
        this.FlipPlayers();
      }
      
    }
  }
  isDraw() : boolean {
    return this.moves >= 9 ? true : false;
  }
  
  FlipPlayers() {
    this.currentPlayer == Players.playerX ? this.currentPlayer = Players.playerO : this.currentPlayer = Players.playerX;
  }
  CheckIfWon() : boolean{
    if(this.currentPlayer == Players.playerX){
        if( this.playerXPosition.filter( X => X == 1 ).length > 0 && this.playerXPosition.filter( X => X == 2 ).length > 0 && this.playerXPosition.filter( X => X == 3 ).length > 0 ){
          return true;
        }
        else if( this.playerXPosition.filter( X => X == 4 ).length > 0 && this.playerXPosition.filter( X => X == 5 ).length > 0 && this.playerXPosition.filter( X => X == 6 ).length > 0 ){
          return true;
        }
        else if( this.playerXPosition.filter( X => X == 7 ).length > 0 && this.playerXPosition.filter( X => X == 8 ).length > 0 && this.playerXPosition.filter( X => X == 9 ).length > 0 ){
          return true;
        }
        else if( this.playerXPosition.filter( X => X == 1 ).length > 0 && this.playerXPosition.filter( X => X == 4 ).length > 0 && this.playerXPosition.filter( X => X == 7 ).length > 0 ){
          return true;
        }
        else if( this.playerXPosition.filter( X => X == 2 ).length > 0 && this.playerXPosition.filter( X => X == 5 ).length > 0 && this.playerXPosition.filter( X => X == 8 ).length > 0 ){
          return true;
        }
        else if( this.playerXPosition.filter( X => X == 3 ).length > 0 && this.playerXPosition.filter( X => X == 6 ).length > 0 && this.playerXPosition.filter( X => X == 9 ).length > 0 ){
          return true;
        }
        else if( this.playerXPosition.filter( X => X == 1 ).length > 0 && this.playerXPosition.filter( X => X == 5 ).length > 0 && this.playerXPosition.filter( X => X == 9 ).length > 0 ){
          return true;
        }
        else if( this.playerXPosition.filter( X => X == 3 ).length > 0 && this.playerXPosition.filter( X => X == 5 ).length > 0 && this.playerXPosition.filter( X => X == 7 ).length > 0 ){
          return true;
        }
        else{
          return false;
        }
    }
    else if(this.currentPlayer == Players.playerO){
      if( this.playerOPosition.filter( O => O == 1 ).length > 0 && this.playerOPosition.filter( O => O == 2 ).length > 0 && this.playerOPosition.filter( O => O == 3 ).length > 0 ){
        return true;
      }
      else if( this.playerOPosition.filter( O => O == 4 ).length > 0 && this.playerOPosition.filter( O => O == 5 ).length > 0 && this.playerOPosition.filter( O => O == 6 ).length > 0 ){
        return true;
      }
      else if( this.playerOPosition.filter( O => O == 7 ).length > 0 && this.playerOPosition.filter( O => O == 8 ).length > 0 && this.playerOPosition.filter( O => O == 9 ).length > 0 ){
        return true;
      }
      else if( this.playerOPosition.filter( O => O == 1 ).length > 0 && this.playerOPosition.filter( O => O == 4 ).length > 0 && this.playerOPosition.filter( O => O == 7 ).length > 0 ){
        return true;
      }
      else if( this.playerOPosition.filter( O => O == 2 ).length > 0 && this.playerOPosition.filter( O => O == 5 ).length > 0 && this.playerOPosition.filter( O => O == 8 ).length > 0 ){
        return true;
      }
      else if( this.playerOPosition.filter( O => O == 3 ).length > 0 && this.playerOPosition.filter( O => O == 6 ).length > 0 && this.playerOPosition.filter( O => O == 9 ).length > 0 ){
        return true;
      }
      else if( this.playerOPosition.filter( O => O == 1 ).length > 0 && this.playerOPosition.filter( O => O == 5 ).length > 0 && this.playerOPosition.filter( O => O == 9 ).length > 0 ){
        return true;
      }
      else if( this.playerOPosition.filter( O => O == 3 ).length > 0 && this.playerOPosition.filter( O => O == 5 ).length > 0 && this.playerOPosition.filter( O => O == 7 ).length > 0 ){
        return true;
      }
      else{
        return false;
      }
    }
    
  }
  ResetGame() {
    this.currentPlayer = Players.playerX;
    this.playerXPosition = [];
    this.playerOPosition = [];
  }
  Allocated(currentCard : number) :boolean{
    //returns true if currentCard is already allocated
    if( this.playerXPosition.filter( X => currentCard == X ).length > 0 || this.playerOPosition.filter( O => currentCard === O ).length > 0 ){
      return true;
    }
    else{
      false;
    }
  }
  
  IsX(cardNumber : number) : boolean{
    if(this.playerXPosition.filter( X => cardNumber == X).length > 0){
      return true;
    }
    else{
      return false;
    }
  }
  
  IsO(cardNumber : number) : boolean{
    if(this.playerOPosition.filter( O => cardNumber == O ).length > 0){
      return true;
    }
    else{
      return false;
    }
  }
}
