import { Component } from "@angular/core";

@Component({
  selector: "site-logo",
  templateUrl: "./site-logo.component.html",
  styleUrls: ["./site-logo.component.scss"],
  standalone: true,
})
export class SiteLogoComponent {
  public logo = "assets/images/logo.jpg";
  public featuresMenuVisible = false;

  public toggleFeaturesMenu() {
    this.featuresMenuVisible = !this.featuresMenuVisible;
    console.log('featuresMenuVisible', this.featuresMenuVisible);
  }
}
