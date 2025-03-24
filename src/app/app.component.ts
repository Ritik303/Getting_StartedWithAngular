  import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data, RouterOutlet } from '@angular/router';

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
  onInput($event :any){
    console.log("Change Event occured!", $event.data);
    const nameRegex = RegExp('[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.username)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect";    
  }


}
