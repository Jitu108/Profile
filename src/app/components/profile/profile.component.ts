import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  Header: string = "Profile Summary";
  //Details: string = ;

  visibilityHolder: {[s: string]: boolean} = {'summary': true};
  constructor() { }

  ngOnInit() {
  }

  itemClicked(i: string){
    var exist = this.visibilityHolder[i];
    if(exist === undefined || !exist) {
      this.visibilityHolder[i] = true;
    }
    else {
      this.visibilityHolder[i] = false;
    }
  }

}
