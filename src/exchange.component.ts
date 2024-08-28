import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TopBarComponent } from "./components/top-bar/top-bar.component";

@Component({
	selector: "exchange",
	standalone: true,
	imports: [RouterOutlet, TopBarComponent],
	templateUrl: "./exchange.component.html",
	styleUrls: ["./exchange.component.scss"],
})
export class ExchangeComponent {
}
