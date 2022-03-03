import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageLoggedComponent } from '../pages/frontpage-logged/frontpage-logged.component';
import { FrontpageComponent } from '../pages/frontpage/frontpage.component';

const routes: Routes = [
  {path: "", component: FrontpageComponent},
  {path: "loggedin", component: FrontpageLoggedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
