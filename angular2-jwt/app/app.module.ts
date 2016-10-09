import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { provideAuth }    from 'angular2-jwt';
import { AppComponent }   from './app.component';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  providers: [
    provideAuth({
      headerPrefix: 'JWT'
    })
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
