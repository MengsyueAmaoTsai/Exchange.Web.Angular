import { Component } from "@angular/core";
import { CurrentUserComponent } from "./current-user/current-user.component";
import { SystemClockComponent } from "./system-clock/system-clock.component";

@Component({
	selector: "top-bar",
	templateUrl: "./top-bar.component.html",
	styleUrls: ["./top-bar.component.scss"],
	standalone: true,
	imports: [SystemClockComponent, CurrentUserComponent],
})
export class TopBarComponent {}
