  import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello World';
  imgUrl = "../assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com/"; 
  username: string = "";
  nameError:string="";
  
  ngOnInit() : void {
    this.title = "Hello from bridgelabz.";
  }
  onClick( $event : MouseEvent){
    console.log("Save button is clicked", $event);
    window.open(this.url,"blank");
  }
 
}
