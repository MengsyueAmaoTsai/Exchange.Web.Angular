import { Component } from "@angular/core";

@Component({
	selector: "current-user",
	templateUrl: "./current-user.component.html",
	styleUrls: ["./current-user.component.scss"],
	standalone: true,
})
export class CurrentUserComponent {
	public dropdownVisible = false;

	public toggleDropdown(): void {
		this.dropdownVisible = !this.dropdownVisible;
	}
}
