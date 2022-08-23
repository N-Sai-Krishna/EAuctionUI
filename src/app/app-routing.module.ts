import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { BidsComponent } from './bids/bids.component';

const routes: Routes = [
  
      {path: 'Search', component: SearchComponent},
      {path: 'Product', component: ProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
