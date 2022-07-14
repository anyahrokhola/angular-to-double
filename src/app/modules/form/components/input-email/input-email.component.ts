import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent implements OnInit {
  @Input() placeholder = "Email"
  constructor() { }

  ngOnInit(): void {
  }

}
