import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AceptarTerminosComponent } from "./aceptar-terminos/aceptar-terminos.component";
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { DashBoardComponent } from './Dash/dash-board/dash-board.component';
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './registro/registro.component';
import { QuienesSOmos01Component } from './QuienesSomos/quienes-somos01/quienes-somos01.component';
import { FacturaComponent } from './factura/factura.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NavbarComponent,
        HomePageComponent,
        FooterComponent,
        LoginComponent,
        RegistroComponent,
        AceptarTerminosComponent,
        DashBoardComponent,
        QuienesSOmos01Component,
        RestablecerContrasenaComponent,
        FacturaComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'appBio';
}
