import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks: ['Empty dishwasher', 'Start LaunchCode prep work', 'Buy groceries']},
      {title: "Today's Chores", tasks: ['Load dishwasher', 'Finish LaunchCode prep work', 'Buy the groceries you forgot']},
      {title: "Tomorrow's Chores", tasks: ['Empty dishwasher AGAIN', 'Play with LaunchCode practice code', 'Groceries AGAIN']},
   ]

   constructor() { }

   ngOnInit() {
   }

}


// <div class='chores' *ngFor = "let title of todoTitles">
//     <h3>{{title}}</h3>
//     <ul>
//       <li *ngFor = "let chore of chores">{{chore}}</li>
//     </ul>
//     <hr>
//  </div>
 

// chores = ['Empty dishwasher', 'Complete LaunchCode prep work'];
//    todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores", "2036's chores"];