import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';
import { NewanswerComponent } from './newanswer/newanswer.component';
import { DeleteComponent } from './delete/delete.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'show/:_id', component: ShowComponent },
    { path: 'new', component: NewComponent },
    { path: 'delete/:_id', component: DeleteComponent },
    { path: 'answer/:_id', component: NewanswerComponent },
];
export const routing = RouterModule.forRoot(APP_ROUTES);