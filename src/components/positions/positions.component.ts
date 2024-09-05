import { Component } from "@angular/core";

@Component({
	selector: "positions",
	templateUrl: "./positions.component.html",
	styleUrls: ["./positions.component.scss"],
	standalone: true,
})
export class PositionsComponent {
	positions = [];
}
