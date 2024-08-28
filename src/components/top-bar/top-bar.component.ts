import { Component } from "@angular/core";
import { CurrentUserComponent } from "../current-user/current-user.component";

@Component({
	selector: "top-bar",
	templateUrl: "./top-bar.component.html",
	styleUrls: ["./top-bar.component.scss"],
	standalone: true,
	imports: [CurrentUserComponent],
})
export class TopBarComponent {}
