import { Component, Input } from '@angular/core';
import { CountryCodePipe } from '../../pipes/country-code.pipe';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CountryCodePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input({}) naame = "";
name = "krish";
}
