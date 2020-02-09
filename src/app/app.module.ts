import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { CardformComponent } from './cardform/cardform.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, CardformComponent, InputComponent, CardComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
