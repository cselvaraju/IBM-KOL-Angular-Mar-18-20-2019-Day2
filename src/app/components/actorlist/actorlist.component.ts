import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  actorList;
  listFlag: boolean;
  btnText: string;
  message: string;
  newName: string;
  newRating: number;

  constructor() { }

  ngOnInit() {
    this.actorList = [
      {name: 'Amitabh Bachhan', rating: 9.5},
      {name: 'Kamal Hasan', rating: 6.6},
      {name: 'Alia Bhat', rating: 2.0},
      {name: 'Deepika Padukone', rating: 7.8},
      {name: 'Rajnikant', rating: 9.0}
    ];
    this.listFlag = true;
    this.btnText = 'Hide List';
    this.message = '';
    this.newName = '';
    this.newRating = null;
  }

  btnClicked(event) {
    alert('OUCH! That Hurt!!\nPlease be gentle....');
    console.log(event);
  }

  toggleList() {
    this.listFlag = !this.listFlag;
    this.btnText = this.listFlag ? 'Hide List' : 'Show List';
  }

  deleteActor(index) {
    this.actorList.splice(index, 1);
  }

  addActor() {
    this.actorList.push({
      name: this.newName,
      rating: this.newRating
    });
    this.newName = '';
    this.newRating = null;
  }
}
