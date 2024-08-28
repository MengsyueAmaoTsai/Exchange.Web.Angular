import { Component } from "@angular/core";

@Component({
	selector: "current-user",
	templateUrl: "./current-user.component.html",
	styleUrls: ["./current-user.component.scss"],
	standalone: true,
})
export class CurrentUserComponent {
	public menuVisible = false;

	public currentUser = {
		name: "Mengsyue Amao Tsai",
		email: "mengsyue.tsai@outlook.com",
	};
}
