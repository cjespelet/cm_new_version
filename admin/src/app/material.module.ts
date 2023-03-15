import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule} from '@angular/material/form-field'
import {MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {  MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio'


const myModules = [ MatToolbarModule,MatSidenavModule,MatButtonModule,MatMenuModule,MatListModule,MatIconModule,MatCardModule,MatFormFieldModule, MatInputModule, MatTableModule,  MatPaginatorModule, MatSortModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatCheckboxModule,
MatOptionModule, MatRadioModule ]

@NgModule({
    imports: [...myModules],
    exports: [...myModules]
})

export class MaterialModule {}