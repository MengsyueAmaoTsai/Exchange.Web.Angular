import type { Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { DefaultComponent } from "./pages/default/default.component";
import { DevComponent } from "./pages/dev/dev.component";

export const routes: Routes = [
	{
		path: "",
		component: DefaultComponent,
		pathMatch: "full",
	},
	{
		path: "about",
		component: AboutComponent,
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
