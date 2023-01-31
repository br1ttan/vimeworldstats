import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { toStatusPipe, WinOrLosePipe } from './pipes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        WinOrLosePipe,
        toStatusPipe
    ],
    exports: [
        HttpClientModule,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        ReactiveFormsModule,
        FormsModule,
        MatTabsModule,
        WinOrLosePipe,
        
        toStatusPipe
    ]
})
export class SharedModule {}
