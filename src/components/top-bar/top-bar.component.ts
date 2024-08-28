import { Component } from "@angular/core";
import { SiteLogoComponent } from "../site-logo/site-logo.component";
import { SiteBrandComponent } from "../site-brand/site-brand.component";
import { SystemClockComponent } from "../system-clock/system-clock.component";
import { CurrentUserComponent } from "../current-user/current-user.component";

@Component({
  selector: "top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"],
  standalone: true,
  imports: [SiteLogoComponent, SiteBrandComponent, SystemClockComponent, CurrentUserComponent],
})
export class TopBarComponent {}
