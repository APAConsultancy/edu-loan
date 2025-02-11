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
      const url = `https://api.st-messaging.com/fe/api/v1/send?username=smtdsy54.trans&password=xlVJu&unicode=false&from=STMREG&to=${to}&text=${encodeURIComponent(text)}&dltContentId=1207173253232223351&dltPrincipalEntityId=1201170019608954004`;
      return this.httpService.getOTP<any>(url);
    }

      // Method to phone Number
    savePreDetails(phoneNumber: string, status: string, hearAboutUs: string): Observable<any> {
    const endpoint = `PreCustomerDetails/AddPreDetails?phoneNumber=${phoneNumber}&status=${status}&hearAboutUs=${hearAboutUs}`;
    return this.httpService.get<any>(endpoint);
  }
}
