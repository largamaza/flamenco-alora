import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LeftMenuComponent } from './left-menu/left-menu.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { LoginFormComponent } from './login-form/login-form.component';
//import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderButtonTranslateComponent } from './header-button-translate/header-button-translate.component';

//translate modules
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryModule } from '@daelmaak/ngx-gallery';

import { SwiperModule } from "swiper/angular";
import { UserlistComponent } from './userlist/userlist.component';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    LoginFormComponent,
    HomeComponent,
    HistoryComponent,
    HeaderButtonTranslateComponent,
    GalleryComponent,
    UserlistComponent
  ],
  imports: [
    GalleryModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,

    MatSidenavModule,
    MatListModule,

   // MatFormFieldModule,
    FormsModule,
   // ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),

    SwiperModule
  ],
  providers: [

    //{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
    ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
