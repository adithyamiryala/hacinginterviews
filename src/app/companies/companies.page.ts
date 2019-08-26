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
  private searchCompanyURL = "https://suggest.naukri.com/suggest/autosuggest?category=company&appId=105&limit=15&vertical=pFrea_18&query=";
  public data: any;
  public searchData; any;

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

  getCompaniesSearchInfo() {
    this.http.get(this.companiesInfoURL).subscribe((res) => {
      this.searchData = res;
    })
  }

  searchCompanies(event) {
    this.getCompaniesSearchInfo();
    console.log(this.searchData);
    this.data = this.searchData.filter((item) => {
      return item.companyName.toLowerCase().includes(event.target.value.toLowerCase());
    })
    // this.http.get(this.searchCompanyURL+event.target.value).subscribe((res) => {
    // })
  }

  setFilteredItems(searchterm) {

  }
}
