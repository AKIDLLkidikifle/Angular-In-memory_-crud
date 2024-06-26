import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../model/product.model';

import { CandidateModel } from '../model/product.model';
import { CompanyModel } from '../model/product.model';
import { DepartmentModel } from '../model/product.model';
import { SalaryModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private apiUrl = 'api/';
  private productsUrl = 'employees/';
  private candidatesUrl = 'candidates/';
  private companysUrl = 'company/';
  private departmentsUrl = 'department/';
  private salaryUrl = 'salary/';  

  constructor(private http: HttpClient) { }
  //product
  getallproducts() {
    return this.http.get<EmployeeModel[]>(this.apiUrl + this.productsUrl);
  }

  Createproduct(inputdata: EmployeeModel) {
    return this.http.post(this.apiUrl + this.productsUrl, inputdata);
  }

  Updateproduct(inputdata: EmployeeModel) {
    return this.http.put(this.apiUrl + this.productsUrl+inputdata.id, inputdata);
  }

  Deleteproduct(productid: number) {
    return this.http.delete(this.apiUrl + this.productsUrl+productid);
  }

  Getproduct(productid: number) {
    return this.http.get<EmployeeModel>(this.apiUrl + this.productsUrl+productid);
  }

  getallsalary() {
    return this.http.get<SalaryModel[]>(this.apiUrl + this.salaryUrl);    
  }

  Createsalary(inputdata: SalaryModel) {
    return this.http.post(this.apiUrl + this.salaryUrl, inputdata);    
  }

  Updatesalary(inputdata: SalaryModel) {
    return this.http.put(this.apiUrl + this.salaryUrl+inputdata.id, inputdata);    
  }

  Deletesalary(salaryid: number) {
    return this.http.delete(this.apiUrl + this.salaryUrl+salaryid);    
  }

  Getsalary(salaryid: number) {
    return this.http.get<SalaryModel>(this.apiUrl + this.salaryUrl+salaryid);    
  }

  //department
  getalldepartment() {
    return this.http.get<DepartmentModel[]>(this.apiUrl + this.departmentsUrl);    
  }

  Createdepartment(inputdata: DepartmentModel) {
    return this.http.post(this.apiUrl + this.departmentsUrl, inputdata);    
  }

  Updatedepartment(inputdata: DepartmentModel) {
    return this.http.put(this.apiUrl + this.departmentsUrl+inputdata.id, inputdata);    
  }

  Deletedepartment(departmentid: number) {
    return this.http.delete(this.apiUrl + this.departmentsUrl+departmentid);    
  }

  Getdepartment(departmentid: number) {
    return this.http.get<DepartmentModel>(this.apiUrl + this.departmentsUrl+departmentid);    
  }

  //company
  getallcompany() {
    return this.http.get<CompanyModel[]>(this.apiUrl + this.companysUrl);
  }
  
  Createcompany(inputdata: CompanyModel) {
    return this.http.post(this.apiUrl + this.companysUrl, inputdata);  
  }

  Updatecompany(inputdata: CompanyModel) {
    return this.http.put(this.apiUrl + this.companysUrl+inputdata.id, inputdata);    
  }

  Deletecompany(companyid: number) {
    return this.http.delete(this.apiUrl + this.companysUrl+companyid);    
  }

  Getcompany(companyid: number) {
    return this.http.get<CompanyModel>(this.apiUrl + this.companysUrl+companyid);   
  }

  //candidate
  getallcandidates(){
    return this.http.get<CandidateModel[]>(this.apiUrl + this.candidatesUrl);    
  }

  Createcandidate(inputdata: CandidateModel) {
    return this.http.post(this.apiUrl + this.candidatesUrl, inputdata);   
  }

  Updatecandidate(inputdata: CandidateModel){
    return this.http.put(this.apiUrl + this.candidatesUrl+inputdata.id, inputdata);    
  }

  Deletecandidate(candidateid: number) {
    return this.http.delete(this.apiUrl + this.candidatesUrl+candidateid);    
  }

  Getcandidate(candidateid: number) {
    return this.http.get<CandidateModel>(this.apiUrl + this.candidatesUrl+candidateid);  
  }

}
