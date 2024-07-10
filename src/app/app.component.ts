import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppStatusBarComponent } from "./components/app-status-bar/app-status-bar.component";
import { OrderEntryComponent } from "./components/order-entry/order-entry.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, AppHeaderComponent, AppStatusBarComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "exchange";
}
