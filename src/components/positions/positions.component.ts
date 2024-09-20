import { Component, Input } from "@angular/core";
import type { PositionResponse } from "../../infrastructure/resources/contracts";

@Component({
	selector: "positions",
	templateUrl: "./positions.component.html",
	styleUrls: ["./positions.component.scss"],
	standalone: true,
})
export class PositionsComponent {
	@Input() public positions: PositionResponse[] = [];
}
