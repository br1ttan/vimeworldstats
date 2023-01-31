import { Component, OnInit } from "@angular/core";
import { ThemeService } from "@theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly themeService: ThemeService
  ) {}

  public ngOnInit(): void {
    this.themeService.initDefault();
  }
}
