import { Component } from "@angular/core";
import { WatchListComponent } from "../../components/watch-list/watch-list.component";

@Component({
	selector: "default",
	standalone: true,
	templateUrl: "./default.component.html",
	styleUrls: ["./default.component.scss"],
	imports: [WatchListComponent],
})
export class DefaultComponent {}
