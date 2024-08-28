import { Component } from "@angular/core";
import { SiteLogoComponent } from "../site-logo/site-logo.component";
import { SiteBrandComponent } from "../site-brand/site-brand.component";

@Component({
  selector: "top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"],
  standalone: true,
  imports: [SiteLogoComponent, SiteBrandComponent],
})
export class TopBarComponent {}
