import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { KeyType, LocalStorageService } from '../../services/local-storage.service';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { ETema, IHeaderRoute } from '../../interfaces/shared.interface';
import { HEADER_ROUTES } from '../../shared.content';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class HeaderComponent implements OnInit {
  public themeIcon: { icon: string; label: string };
  public routes: IHeaderRoute[] = HEADER_ROUTES;
  public state = 'ready';

  constructor(private localStorageService: LocalStorageService) {
    this.themeIcon = { icon: 'light_mode', label: ETema.LIGHT };
  }

  public ngOnInit(): void {
    this.verifyTheme();
  }

  public hasTheme(): boolean {
    return this.localStorageService.has(KeyType.TEMA);
  }

  public verifyTheme(): void {
    if (!this.hasTheme()) { return; }

    const tema = this.localStorageService.get(KeyType.TEMA);
    this.themeIcon = tema;

    if (this.themeIcon.label === ETema.DARK) {
      document.body.classList.add('dark-theme');
    }
  }

  public toggleTooltip(): string {
    return this.themeIcon.label === ETema.LIGHT ? 'Mudar para tema escuro' : 'Mudar para tema claro';
  }

  public toggleTheme() {
    document.body.classList.toggle('dark-theme');
    this.themeIcon = this.themeIcon.label === ETema.LIGHT ? { icon: 'dark_mode', label: ETema.DARK } : { icon: 'light_mode', label: ETema.LIGHT };
    this.localStorageService.set(KeyType.TEMA, this.themeIcon);
  }
}
