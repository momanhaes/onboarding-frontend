import { of, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { GithubService } from 'src/app/shared/services/github.service';
import { WindowService } from 'src/app/shared/services/window.service';
import { IProfile, IRepo } from 'src/app/shared/interfaces/profile.interface';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { EOrigin } from 'src/app/shared/interfaces/shared.interface';

@Component({
  selector: 'app-gh-search',
  templateUrl: './gh-search.component.html',
  styleUrls: ['./gh-search.component.scss'],
  animations: [APPEARD],
})
export class GitHubSearchComponent implements OnInit {
  public person: IProfile = {} as IProfile;
  public repos: IRepo[] = [];
  
  public userForm!: UntypedFormGroup;
  public repoForm!: UntypedFormGroup;

  public isUserLoading: boolean = false;
  public isRepoLoading: boolean = false;
  public isRepo: boolean = false;
  public isMobile!: boolean;
  
  public searchTerm!: string;
  public user: string = '';
  public state = 'ready';

  constructor(
    public dialog: MatDialog,
    private githubService: GithubService,
    private windowService: WindowService,
  ) { this.isMobile = window.innerWidth <= windowService.widthMobile; }

  ngOnInit() {
    this.windowService.isMobile.subscribe((isMobile: boolean) => (this.isMobile = isMobile));
    this.userForm = new UntypedFormGroup({ userControl: new UntypedFormControl('') });
    this.repoForm = new UntypedFormGroup({ repoControl: new UntypedFormControl('') });

    this.getUser();
    this.filterRepos();
  }

  public getUser(): void {
    this.userForm.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((user) => {
          if (!user.userControl.trim()) {
            this.person = {} as IProfile;
            return of({});
          }

          this.isUserLoading = true;
          this.user = user.userControl;
          return this.githubService.getUser(this.user);
        }),
        catchError((err) => {
          setTimeout(() => {
            this.isUserLoading = false;
            this.person = {} as IProfile;
            this.openDialog();
          }, 1000);

          return err;
        })
      )
      .subscribe((person) => {
        setTimeout(() => {
          this.person = person as IProfile;
          this.isUserLoading = false;
        }, 1000);
      });
  }

  public openDialog(): void {
    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(
      DialogComponent,
      {
        data: {
          title: 'Ops!',
          message: this.user ? `Não foi encontrado um perfil para '${this.user}'` : 'Erro',
          origin: EOrigin.PROFILE,
        },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.confirm && result.origin === EOrigin.PROFILE) {
        window.location.reload()
      }
    });
  }

  public filterRepos(): void {
    this.repoForm.valueChanges.subscribe((searchTerm) => {
      this.searchTerm = searchTerm.repoControl;

      const result: IRepo[] = this.repos.filter(
        (item) =>
          item.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.language?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.description?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.forks?.toString().includes(this.searchTerm)
      );

      this.githubService.updateTable(result, this.searchTerm);
    });
  }

  public goProfile(): void {
    this.isRepo = false;
  }

  public goRepos(user: string): void {
    this.isRepoLoading = true;

    if (!user) return;

    setTimeout(() => {
      this.githubService.getUserRepos(user).subscribe((repos) => {
        this.repos = repos;
        this.isRepo = true;
        this.isRepoLoading = false;
      });
    }, 1000);
  }
}
