import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, type OnInit, inject } from "@angular/core";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
	public symbol = "MAX:USDTTWD";
	public side = "Buy";
	public quantity = 1;
	public price = 32.003;

	public constructor(private httpClient: HttpClient) {}

	public ngOnInit(): void {}

	public placeOrder = async (): Promise<void> => {
		const response = this.httpClient
			.post("https://localhost:10000/api/v1/orders", {
				symbol: this.symbol,
				side: this.side,
				type: "LIMIT",
				timeInForce: "GTC",
				quantity: this.quantity,
				price: this.price,
			})
			.subscribe((response) => {
				console.log(response);
			});
		console.log(response);
	};
}
