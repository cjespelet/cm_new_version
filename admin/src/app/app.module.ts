import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MaterialModule } from '@app/material.module';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AdminUsersModule } from './pages/managers/admin-users/admin-users.module';
import { MerchandiseModule } from './pages/merchandise/merchandise.module';
import { TableModule } from './modules/table/table.module';
import { AdminUsersCreateModule } from './pages/managers/admin-users-create/admin-users-create.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/','.json')
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    TableModule,
    SidebarModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage : 'no',
      loader:{
        provide: TranslateLoader,
        useFactory:createTranslateLoader,
        deps: [HttpClient],
      }
    }),
    AdminUsersModule,
    MerchandiseModule,
    AdminUsersCreateModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule.forRoot({
      defaultLanguage: 'no'
  })   
    
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
