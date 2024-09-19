import { Component, VERSION, inject } from "@angular/core";
import type { InjectionToken, OnInit } from "@angular/core";
import { DefaultLogger, type ILogger } from "../../infrastructure/logging";

@Component({
	selector: "about",
	templateUrl: "./about.component.html",
	providers: [
		{
			provide: "ILogger<AboutComponent>",
			useFactory: () => new DefaultLogger<AboutComponent>(AboutComponent),
		},
	],
})
export class AboutComponent implements OnInit {
	private readonly logger: ILogger<AboutComponent> = inject(
		"ILogger<AboutComponent>" as unknown as InjectionToken<
			ILogger<AboutComponent>
		>,
	);

	public appVersion = "0.0.0";
	public angularVersion = VERSION.full;

	public ngOnInit(): void {
		this.logger.logInformation(`App version: ${this.appVersion}`);
		this.logger.logInformation(`Angular version: ${this.angularVersion}`);
	}
}
