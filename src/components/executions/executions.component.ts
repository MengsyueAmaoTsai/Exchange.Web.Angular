import { Component, Input } from "@angular/core";
import type { ExecutionResponse } from "../../infrastructure/resources/contracts";

@Component({
	selector: "executions",
	templateUrl: "./executions.component.html",
	styleUrls: ["./executions.component.scss"],
	standalone: true,
})
export class ExecutionsComponent {
	@Input() executions: ExecutionResponse[] = [];
}
