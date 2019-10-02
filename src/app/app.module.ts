import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AyooComponent } from './ayoo/ayoo.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { AfterheadComponent } from './afterhead/afterhead.component';
import { DirectaaDirective } from './directaa.directive';
import { Rout1Component } from './rout1/rout1.component';
import { Rout2Component } from './rout2/rout2.component';
import { PrefootComponent } from './prefoot/prefoot.component';
import { B4footComponent } from './b4foot/b4foot.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LboxComponent } from './lbox/lbox.component';
import { SboxComponent } from './sbox/sbox.component';
import { PiperPipe } from './pipee/piper.pipe';
const poda:Routes=[
{path:"", component:HomeComponent,pathMatch:'full'},
{path:"store", component:AyooComponent},
{path:"connect", component:Rout1Component}, 
{path:"store/:dynamic",component:DetailsComponent},
{path:"login",component:LboxComponent},
{path:"register",component:SboxComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AyooComponent,
    HeadComponent,
    FootComponent,
    AfterheadComponent,
    DirectaaDirective,
    Rout1Component,
    Rout2Component,
    PrefootComponent,
    B4footComponent,
    HomeComponent,
    DetailsComponent,
    LboxComponent,
    SboxComponent,
    PiperPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(poda)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
