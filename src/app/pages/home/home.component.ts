import { CommonModule } from "@angular/common";
import { Component, type OnInit, inject } from "@angular/core";
import { ApiService } from "../../api.service";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
	apiService = inject(ApiService);

	public constructor() {}

	ngOnInit(): void {}
}
