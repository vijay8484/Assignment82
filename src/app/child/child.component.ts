import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // Create object of event class
  @Output() public MyEvent = new EventEmitter();
 
  // Action listener for button
  public SendEvent()
  {
    // Send the event to parent
    this.MyEvent.emit('Message from child');
  }

 // Add input decorator as it will receve the data from parent
 @Input() public parentData;

  constructor() { }

  ngOnInit() {
  }

}
