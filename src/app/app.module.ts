import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {SplitterModule} from 'primeng/splitter';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {InputNumberModule} from 'primeng/inputnumber';
import {PanelModule} from 'primeng/panel';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { RoleComponent } from './role/role.component';

import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { QuillModule } from 'ngx-quill';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    SplitterModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    ToastModule,
    InputNumberModule,
    PanelModule,
    CheckboxModule,
    RadioButtonModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    ConfirmationService,
    MessageService,QuillModule
    
    
   
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
