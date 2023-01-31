import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutsModule } from "@layouts";
import { SharedModule } from "@shared";
import { 
  NgxBaseStateDevtoolsConfig, 
  NgxBaseStateDevtoolsModule, 
  NGX_BASE_STATE_DEVTOOLS_CONFIG 
} from "ngx-base-state";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    NgxBaseStateDevtoolsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutsModule
  ],
  providers: [
    {
        provide: NGX_BASE_STATE_DEVTOOLS_CONFIG,
        useValue: new NgxBaseStateDevtoolsConfig({
          isEnabled: !environment.production
        })
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
