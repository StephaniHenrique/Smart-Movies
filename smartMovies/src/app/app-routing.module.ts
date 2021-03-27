import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
