import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {LinkComponent} from './link/link.component'




@NgModule({
  declarations: [
    AppComponent,
    LinkComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 


}
