import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRouteEnum } from "src/app/core";
import { PlayerComponent } from "./player.component";

const routes: Routes = [
    {path: '', component: PlayerComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlayerRouting {}
