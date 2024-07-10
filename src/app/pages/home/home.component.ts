import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { InstrumentResponse, Paged } from "../../api.contract";
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
	instruments: Paged<InstrumentResponse> | null = null;

	public constructor() {}

	ngOnInit(): void {
		this.apiService.getInstruments().subscribe(
			(data: Paged<InstrumentResponse>) => {
				this.instruments = data;
			},
			(error: Error) => {
				console.log("Error fetching instruments: ", error);
			},
		);
	}
}
