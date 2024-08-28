import { Component } from "@angular/core";
import { CurrentUserMenuComponent } from "./current-user-menu.component";

@Component({
	selector: "current-user",
	templateUrl: "./current-user.component.html",
	styleUrls: ["./current-user.component.scss"],
	standalone: true,
	imports: [CurrentUserMenuComponent],
})
export class CurrentUserComponent {
	public menuVisible = false;

	public toggleDropdown(): void {
		this.menuVisible = !this.menuVisible;
	}
}
