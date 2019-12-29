import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent} from './components/menu/menu.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
