import { Component } from "@angular/core";

@Component({
  selector: "current-user",
  templateUrl: "./current-user.component.html",
  styleUrls: ["./current-user.component.scss"],
  standalone: true,
  imports: [],
})
export class CurrentUserComponent {
  public defaultAvatarImage = "assets/images/default-avatar-small.png";
  public currentUser = {
    name: 'Mengsyue Amao Tsai',
    email: 'mengsyue.tsai@outlook.com'
  }
}
