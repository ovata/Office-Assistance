import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppComponent } from './app.component';
import { DBodyComponent } from './components/dbody/dbody.component';
import { DFooterComponent } from './components/dfooter/dfooter.component';
import { DHeaderComponent } from './components/dheader/dheader.component';

@NgModule({
  declarations: [
    AppComponent,
    DBodyComponent,
    DFooterComponent,
    DHeaderComponent
  ],
  imports: [
    BrowserModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
