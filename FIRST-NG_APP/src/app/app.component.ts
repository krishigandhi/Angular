import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CountryCodePipe } from './pipes/country-code.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,CountryCodePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FIRST-NG_APP';
}
