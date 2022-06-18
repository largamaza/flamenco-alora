import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  shouldRun = true;
//$localize':@@id:source message text';
  fillerNav = [
    {
      name:'Historia',
      link: 'history'
    },
    {
      name: 'Galeria',
      link: 'gallery'},
    {
      name: 'Videos',
      link: 'videos'},
    {
      name:'Conciertos',
      link: 'concerts'}];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
