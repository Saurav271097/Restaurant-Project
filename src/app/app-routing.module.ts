import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ReviewComponent } from './review/review.component';
// import { SpecialsComponent } from './specials/specials.component';
import { LoginComponent } from './login/login.component';
// import { EventsComponent } from './events/events.component';
// import { ChefsComponent } from './chefs/chefs.component';
// import { BooktableComponent } from './booktable/booktable.component';
// import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserComponent } from './user/user.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UseraboutComponent } from './userabout/userabout.component';
import { UserbooktableComponent } from './userbooktable/userbooktable.component';
import { UserchefsComponent } from './userchefs/userchefs.component';
import { UsereventsComponent } from './userevents/userevents.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { UserreviewsComponent } from './userreviews/userreviews.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserspecialsComponent } from './userspecials/userspecials.component';
import { PaymentComponent } from './payment/payment.component';
import { PackageComponent } from './package/package.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminreportComponent } from './adminreport/adminreport.component';
import { AdmincartlistComponent } from './admincartlist/admincartlist.component';
import { AdminuserlistComponent } from './adminuserlist/adminuserlist.component';
import { AdminviewbookComponent } from './adminviewbook/adminviewbook.component';
import { AdminmenulistComponent } from './adminmenulist/adminmenulist.component';
import { UpdatemenuComponent } from './updatemenu/updatemenu.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { AdminreviewlistComponent } from './adminreviewlist/adminreviewlist.component';
import { AdminpaymentlistComponent } from './adminpaymentlist/adminpaymentlist.component';

const routes: Routes = [{path:'home', canActivate:[AuthGuard] ,component:HomeComponent},
{path:'',component:LoginComponent},
// {path:'about',component:AboutComponent},
// {path:'review',component:ReviewComponent},
// {path:'specials',component:SpecialsComponent},
{path:'login',component:LoginComponent},
// {path:'events',component:EventsComponent},
// {path:'chefs',component:ChefsComponent},
// {path:'booktable',component:BooktableComponent},
// {path:'menu',component:MenuComponent},
{path:'signup',component:SignupComponent},
{path:'admin',component:AdminComponent},
{path:'adminpage',component:AdminpageComponent},
// {path:'user',component:UserComponent},
{path:'package',component:PackageComponent},
{path:'userpage',component:UserpageComponent},
{path:'userabout',component:UseraboutComponent},
{path:'userbooktable',component:UserbooktableComponent},
{path:'userchefs',component:UserchefsComponent},
{path:'userevents',component:UsereventsComponent},
{path:'usermenu',component:UsermenuComponent},
{path:'userreviews',component:UserreviewsComponent},
{path:'userspecials',component:UserspecialsComponent},
{path:'adminmenu',component:AdminmenuComponent},
{path:'addtocart', component:AddtocartComponent},
{path:'userhome',component:UserhomeComponent},
{path:'payment',component:PaymentComponent},
{path:'adminhome',component:AdminhomeComponent},
{path:'adminreport',component:AdminreportComponent},
{path:'admincartlist',component:AdmincartlistComponent},
{path:'adminuserlist',component:AdminuserlistComponent},
{path:'adminviewbook',component:AdminviewbookComponent},
{path:'adminmenulist',component:AdminmenulistComponent},
{path:'updatemenu',component:UpdatemenuComponent},
{path:'viewmenu',component:ViewmenuComponent},
{path:'adminreviewlist',component:AdminreviewlistComponent},
{path:'adminpaymentlist',component:AdminpaymentlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

