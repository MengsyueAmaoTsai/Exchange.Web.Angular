import { Routes } from "@angular/router";
import { DefaultComponent } from "./pages/default/default.component";
import { DevComponent } from "./pages/dev/dev.component";

export const routes: Routes = [
	{
		path: "",
		component: DefaultComponent,
		pathMatch: "full",
	},
	{
		path: "dev",
		component: DevComponent,
		pathMatch: "full",
	},
	{
		path: "**",
		redirectTo: "/",
		pathMatch: "full",
	},
];
