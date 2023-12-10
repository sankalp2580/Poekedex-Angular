import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PokeServiceService } from './services/poke-service.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports:      [ 
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [ ],
  providers: [PokeServiceService ],
  bootstrap: [ ]
})
export class AppModule { }
