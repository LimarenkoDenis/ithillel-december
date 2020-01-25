import { ProductSpecComponent } from './products/product-spec/product-spec.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { AdminComponent } from './admin/admin.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactsComponent } from './shared/components/contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'products', pathMatch: 'full'
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'products/:productId',
    component: ProductDetailComponent,
    children: [
      {
        path: '', redirectTo: 'specs', pathMatch: 'full'
      },
      {
        path: 'specs', component: ProductSpecComponent
      },
      {
        path: 'comments',
        loadChildren: () => import('./comments/comments.module').then((mod) => mod.CommentsModule)
      }
    ]
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contacts', component: ContactsComponent
  },
  {
    path: 'admin', component: AdminComponent, canActivate: [AdminGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((mod) => mod.CartModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
];
