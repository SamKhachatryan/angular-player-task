import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPlayer } from 'src/components/player';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProgressService } from 'src/services/progress';

const routes: Routes = [
  { path: ':pageNum', component: AppPlayer },
  { path: '**', redirectTo: '/1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, NgCircleProgressModule.forRoot({})],
  declarations: [AppPlayer],
  providers: [ProgressService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
