import { NgModule } from "@angular/core";
import { FeaturesModule } from "@features";
import { SharedModule } from "@shared";
import { ProfileBannerComponent, ProfileFriendsComponent, ProfileHeaderBodyComponent } from "./components";
import { PlayerComponent } from "./player.component";
import { PlayerRouting } from "./player.routing";

@NgModule({
    declarations: [
        PlayerComponent,
        ProfileBannerComponent,
        ProfileHeaderBodyComponent,
        ProfileFriendsComponent,
    ],
    imports: [
        PlayerRouting,
        SharedModule,
        FeaturesModule
    ],
})
export class PlayerModule { }
