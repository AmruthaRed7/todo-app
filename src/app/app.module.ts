import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { Object } from './Object';




@NgModule({
  
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
