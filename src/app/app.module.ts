import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import { S1PositionComponent } from './component/s1-position/s1-position.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    S1PositionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    PasswordModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
