import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bottommenu',
  templateUrl: './bottommenu.component.html',
  styleUrls: ['./bottommenu.component.scss'],
})
export class BottommenuComponent implements OnInit {
  bottom_menu_bar: boolean = false;

  isPopoverOpen: boolean = false;

  @Output() onSnapShot = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  presentPopover(e:any){
    this.isPopoverOpen = true;
  }

  onScreenShot() {
    this.isPopoverOpen = false; //closing popober so it will not come in SS
    this.bottom_menu_bar = false;//closing botom menu so it will not come in SS.
    //but in my actual project bottom menu is leaving its place and some kind of padding is injecting on body. 
    // using setTimeout so both popover and bottom menu get close before screenshot
    setTimeout(()=>{
      this.onSnapShot.emit(true);
    })
  }

}
