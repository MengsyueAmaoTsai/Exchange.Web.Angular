import { Component } from "@angular/core";
import { BrandComponent } from "./brand/brand.component";
import { CurrentUserComponent } from "./current-user/current-user.component";
import { SystemClockComponent } from "./system-clock/system-clock.component";

@Component({
	selector: "top-bar",
	templateUrl: "./top-bar.component.html",
	styleUrls: ["./top-bar.component.scss"],
	standalone: true,
	imports: [BrandComponent, SystemClockComponent, CurrentUserComponent],
})
export class TopBarComponent {}
