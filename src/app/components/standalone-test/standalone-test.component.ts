import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-standalone-test',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './standalone-test.component.html',
  styleUrls: ['./standalone-test.component.scss']
})
export class StandaloneTestComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
