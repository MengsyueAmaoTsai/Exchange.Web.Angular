import { Component } from "@angular/core";

@Component({
	selector: "brand",
	templateUrl: "./brand.component.html",
	styleUrls: ["./brand.component.scss"],
	standalone: true,
})
export class BrandComponent {
	public applicationName = "Richill Capital Exchange";
}
