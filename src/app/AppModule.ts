import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchItemsComponent } from './search/search-items/search-items.component';
import { SearchresponseComponent } from './search/search-response/search-response.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemsComponent,
    SearchresponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
