import { IProfile } from '../../interfaces/profile.interface';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { WindowService } from '../../services/window.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HelperLib } from '../../lib/helper.lib';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [APPEARD],
})
export class ProfileComponent implements OnInit {
  @Output() isRepoEvent = new EventEmitter<string>();

  @Input() public profile!: IProfile;
  @Input() public isLoading: boolean = false;
  
  public state: string = 'ready';
  public isMobile: boolean;  

  constructor(private windowService: WindowService, private helper: HelperLib) { this.isMobile = window.innerWidth <= windowService.widthMobile; }

  ngOnInit() {
    this.windowService.isMobile.subscribe((isMobile: boolean) => (this.isMobile = isMobile));
  }

  public goTo(url: string): void {
    this.helper.goTo(url);
  }

  public goTwitter(username: string): void {
    window.open(`https://twitter.com/${username}`, '_blank');
  }

  public goRepos(user: string): void {
    this.isRepoEvent.emit(user);
  }
}
