import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared";
import { 
    ProfileCardComponent, 
    ProfileMatchesComponent, 
    ProfileStatisticComponent 
} from "./components";

@NgModule({
    declarations: [
        ProfileCardComponent, 
        ProfileMatchesComponent, 
        ProfileStatisticComponent 
    ],
    imports: [
        SharedModule,
        RouterModule
    ],
    exports: [
        ProfileCardComponent, 
        ProfileMatchesComponent, 
        ProfileStatisticComponent 
    ]

})
export class UserModule { }
