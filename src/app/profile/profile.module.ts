import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,    
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
})
export class ProfileModule { }
