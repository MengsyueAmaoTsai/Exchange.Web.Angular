import { CommonModule } from "@angular/common";
import { Component, type OnInit, inject } from "@angular/core";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
	public constructor() {}

	public ngOnInit(): void {}
}
