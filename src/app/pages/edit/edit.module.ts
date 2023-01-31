import { NgModule } from '@angular/core';
import { EditComponent } from './edit.component';
import { EditRouting } from './edit.routing';
import { FileInputComponent } from './components/file-input/file-input.component';
import { SharedModule } from '@shared';
import { BannerDirective } from './directives/banner.directive';

@NgModule({
  declarations: [
    EditComponent,
    FileInputComponent,
    BannerDirective
  ],
  imports: [
    EditRouting,
    SharedModule
  ]
})
export class EditModule { }
