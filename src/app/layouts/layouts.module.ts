import {NgModule} from "@angular/core";
import { AppRoutingModule } from "../app.routing.module";
import { SharedModule } from "../shared";
import { HeaderModule } from "./components/header/header.module";
import {  MainLayoutComponent } from "./main/main.component";

@NgModule({
    declarations: [
        MainLayoutComponent
    ],
    imports: [
        SharedModule,
        HeaderModule,
        AppRoutingModule
    ],
    exports: [
        MainLayoutComponent
    ]
})
export class LayoutsModule {}
