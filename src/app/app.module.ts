// app modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';

// share modules
import { AngularMaterialModule } from './material/material-shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list/restaurant-list.component';
import { IntercepterSharedModule } from './interceptors/interceptor-shared.module';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    RestaurantListComponent,
    CommonDialogComponent,
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IntercepterSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
