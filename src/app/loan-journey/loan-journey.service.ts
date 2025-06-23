import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class LoanJourneyService {

  constructor(
    private httpService: HttpService,
  ) { }


    // Method to send message with dynamic 'to' and 'text' parameters
    sendMessage(to: string, text: string): Observable<any> {
      const url = `https://api.st-messaging.com/fe/api/v1/send?username=Unifnd60.trans&password=F4cH8&unicode=false&from=UNIFNS&to=${to}&text=${text}&dltContentId=1007277823304675946&dltPrincipalEntityId=1001665167758700932`;
  
      //const url = `https://api.st-messaging.com/fe/api/v1/send?username=smtdsy54.trans&password=xlVJu&unicode=false&from=STMREG&to=${to}&text=${encodeURIComponent(text)}&dltContentId=1207173253232223351&dltPrincipalEntityId=1201170019608954004`;
      return this.httpService.getOTP<any>(url);
    }

      // Method to phone Number
    savePreDetails(phoneNumber: string, status: string, hearAboutUs: string): Observable<any> {
    const endpoint = `PreCustomerDetails/AddPreDetails?phoneNumber=${phoneNumber}&status=${status}&hearAboutUs=${hearAboutUs}`;
    return this.httpService.get<any>(endpoint);
    }

    // Method to phone Number
    saveCustomerDetails(data: any): Observable<any> {
      const endpoint = `CustomerDetails/AddCustomerDetails`;
      return this.httpService.post<any>(endpoint, data);
    }
    sendContactUsEmail(data: any): Observable<any> {
      const endpoint = `CustomerDetails/SendContactUsEmail`;
      return this.httpService.post<any>(endpoint, data);
    }
    // Method to add already applied details with dynamic parameters
  addAlreadyAppliedDetails(phoneNumber: string, bankName: string[]): Observable<any> {
    const url = `CustomerDetails/AddAlreadyAppliedDetails?phoneNumber=${phoneNumber}&bankName=${bankName.join(',')}`;
    return this.httpService.get<any>(url);
  }

  // Method to get university details by country name
  getUniversityDetailsByCountryName(countryName: string): Observable<any> {
    const url = `Universities/DetailsByCountryName?countryName=${countryName}`;
    return this.httpService.get<any>(url);
  }

    // Method to get bank names
    getBankNames(): Observable<any> {
      const url = `BankNames/GetBankNames`;
      return this.httpService.get<any>(url);
    }
  
  
    getCityName(pinCode: string): Observable<any> {
      const endpoint = `BankNames/GetCityByPinCcode?pincode=${pinCode}`;
      return this.httpService.get<any>(endpoint); 
    }
}
