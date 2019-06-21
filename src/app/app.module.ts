import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
