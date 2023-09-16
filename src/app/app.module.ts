import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TravelComponent } from './travel/travel.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { NatureComponent } from './nature/nature.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes : Routes =[
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'wild', component:WildlifeComponent},
  {path:'nature', component:NatureComponent},
 { path:'travel', component:TravelComponent},
 {path:'', component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    ContactComponent,
    AboutComponent,
    WildlifeComponent,
    NatureComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
