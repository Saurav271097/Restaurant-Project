import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { CallComponent } from './call/call.component';
import { SpecialsComponent } from './specials/specials.component';
import { EventsComponent } from './events/events.component';
import { ChefsComponent } from './chefs/chefs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PackageComponent } from './package/package.component';
import { ReviewComponent } from './review/review.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BooktableComponent } from './booktable/booktable.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserComponent } from './user/user.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { UseraboutComponent } from './userabout/userabout.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { UserbooktableComponent } from './userbooktable/userbooktable.component';
import { UserspecialsComponent } from './userspecials/userspecials.component';
import { UsereventsComponent } from './userevents/userevents.component';
import { UserchefsComponent } from './userchefs/userchefs.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { UserreviewsComponent } from './userreviews/userreviews.component';
import { AuthComponent } from './auth/auth.component';
import { AuthserviceComponent } from './authservice/authservice.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { PaymentComponent } from './payment/payment.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AdminreportComponent } from './adminreport/adminreport.component';
import { AdminviewbookComponent } from './adminviewbook/adminviewbook.component';
import { AdminuserlistComponent } from './adminuserlist/adminuserlist.component';
import { AdmincartlistComponent } from './admincartlist/admincartlist.component';
import { AdminmenulistComponent } from './adminmenulist/adminmenulist.component';
import { UpdatemenuComponent } from './updatemenu/updatemenu.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { AdminreviewlistComponent } from './adminreviewlist/adminreviewlist.component';
import { AdminpaymentlistComponent } from './adminpaymentlist/adminpaymentlist.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    CallComponent,
    SpecialsComponent,
    EventsComponent,
    ChefsComponent,
    GalleryComponent,
    PackageComponent,
    ReviewComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    BooktableComponent,
    SignupComponent,
    AdminComponent,
    AdminpageComponent,
    AdminhomeComponent,
    UserComponent,
    UserpageComponent,
    AddtocartComponent,
    UseraboutComponent,
    UsermenuComponent,
    UserbooktableComponent,
    UserspecialsComponent,
    UsereventsComponent,
    UserchefsComponent,
    AdminmenuComponent,
    UserreviewsComponent,
    AuthComponent,
    AuthserviceComponent,
    UserhomeComponent,
    PaymentComponent,
    AdminreportComponent,
    AdminviewbookComponent,
    AdminuserlistComponent,
    AdmincartlistComponent,
    AdminmenulistComponent,
    UpdatemenuComponent,
    ViewmenuComponent,
    AdminreviewlistComponent,
    AdminpaymentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BackButtonDisableModule.forRoot({preserveScrollPosition: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
