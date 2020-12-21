import { NgModule } from "@angular/core";

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
@NgModule({
    imports:[
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule
    ],
    exports:[
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule
    ]
})
export class MaterialModule{}