import { Component } from "@angular/core";

@Component({
	selector: "executions",
	templateUrl: "./executions.component.html",
	styleUrls: ["./executions.component.scss"],
	standalone: true,
})
export class ExecutionsComponent {
	executions = [];
}
