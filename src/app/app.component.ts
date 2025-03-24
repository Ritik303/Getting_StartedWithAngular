  import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello World';
  imgUrl = "../assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com/"; 

  onClick( $event : MouseEvent){
    console.log("Save button is clicked", $event);
    window.open(this.url,"blank");
  }
  ngOnInit() : void {
    this.title = "Hello from bridgelabz.";
  }
}
