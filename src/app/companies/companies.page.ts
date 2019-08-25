import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  private companiesInfoURL = "./assets/json/company-info.json";
  public data: any;

  constructor(private http : HttpClient,
              private router : Router) { 
      this.getCompaniesInfo();
  }

  ngOnInit() {
  }

  getCompaniesInfo() {
    this.http.get(this.companiesInfoURL).subscribe((res) => {
      this.data = res;
    })
  }

}
