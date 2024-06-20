import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/layout/header/header.component";
import { FotterComponent } from "./shared/layout/fotter/fotter.component";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CorsInterceptor } from './core/interceptors/http.interceptor';

@Component({
    selector: 'app-root', 
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, HeaderComponent, FotterComponent],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true }
    ],
})
export class AppComponent {
  title = 'demo';
}
