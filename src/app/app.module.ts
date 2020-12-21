import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MclothesComponent } from './mclothes/mclothes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { RegisterComponent } from './register/register.component';
import { MenComponent } from './men/men.component';
import {WclothComponent} from './wcloth/wcloth.component';
import { WchildComponent } from './wchild/wchild.component';
import { FormsModule} from '@angular/forms';
import {WclothesService} from './service/wclothes.service';
import { WclothesComponent } from './wclothes/wclothes.component';
import { BeautyComponent } from './beauty/beauty.component';
import {DeactivateGuard} from './guards/deactivate.guard';
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Beauty', component: BeautyComponent},
  {path: 'Mclothes', component: MclothesComponent},
  {path: 'Accessories', component: AccessoriesComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent, canDeactivate: [DeactivateGuard]},
  {path: 'Men', component: MenComponent},
  {path: 'Wcloth', component: WclothComponent},
  {path: 'Wchild', component: WchildComponent},
  {path: 'Wclothes', component: WclothesComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MclothesComponent,
    AccessoriesComponent,
    RegisterComponent,
    MenComponent,
    WchildComponent,
    WclothesComponent,
    WclothComponent,
    BeautyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [WclothesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
