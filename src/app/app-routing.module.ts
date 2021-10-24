import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioDataComponent } from './port-folio/bio-data/bio-data.component';

const routes: Routes = [
  {
      path: '',
      component: BioDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
