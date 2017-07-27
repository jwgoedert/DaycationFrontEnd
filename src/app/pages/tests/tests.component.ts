import { Component, OnInit } from '@angular/core';
import { TestsService } from '../../shared/services/tests.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  constructor(
    public testsService : TestsService,
  ) { 
  }

  ngOnInit() {
  }
  geoTest(){
    return this.testsService.geoLocationTest();
  }
  goToDashboard2(){
    return this.testsService.goToDashboard();
  }
  seedTest2(){
    return this.testsService.seedTest();
  }
  signUpTest2(){
    return this.testsService.signUpTest();
  }

}
