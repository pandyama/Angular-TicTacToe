import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
} from "@angular/material";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GameplayComponent } from "./gameplay/gameplay.component";
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [AppComponent, GameplayComponent, BoxComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
