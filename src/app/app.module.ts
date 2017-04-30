import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddLisgingComponent } from './components/add-lisging/add-lisging.component';
import { EditLisgingComponent } from './components/edit-lisging/edit-lisging.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCF1sXkikJlDbj84SSmmcXzN11lEZ0Mub4',
  authDomain: 'proplistings-11272.firebaseapp.com',
  databaseURL: 'https://proplistings-11272.firebaseio.com',
  storageBucket: 'proplistings-11272.appspot.com',
  messagingSenderId: '668134948836'
};

const FirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'add-listing', component: AddLisgingComponent},
  {path: 'listing/:id', component: ListingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddLisgingComponent,
    EditLisgingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, FirebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
