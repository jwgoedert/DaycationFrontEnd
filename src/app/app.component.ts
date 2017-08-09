import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import {MdIconModule} from '@angular/material';


import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(
    public iconRegistry: MdIconRegistry,
    public sanitizer: DomSanitizer,
    private router: Router,
  ) {
  this.router = router;
  this.iconRegistry.addSvgIcon(
    'thumbs-up',
    this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
}
