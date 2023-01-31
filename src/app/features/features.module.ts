import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared";
import { MinecraftModule } from "./minecraft";
import { UserModule } from "./player";

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        RouterModule,
        MinecraftModule
    ],
    exports: [
        UserModule,
        MinecraftModule
    ]
})
export class FeaturesModule {}
