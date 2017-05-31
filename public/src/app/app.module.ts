import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { ThoughtService } from './thought.service';
import { routing } from './routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DeleteComponent } from './delete/delete.component';
import { NewanswerComponent } from './newanswer/newanswer.component';



@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ShowComponent,
    DashboardComponent,
    LoginComponent,
    DeleteComponent,
    NewanswerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [ThoughtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
