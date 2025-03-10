import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environmentVars } from 'shared/environmentVars';
import { apiUrls } from 'shared/apiUrls';
import { Practice } from 'shared/interfaces/practice';
import { ReusableServiceCalls } from '../reusable-components/reusable-service-calls';

interface GetPracticesResults {
  id: number,
  practiceName: string,
  practiceShortDescription: string,
  practiceLongDescription: string,
  practiceImage: string,
  isActive: boolean
}

@Injectable({
  providedIn: 'root'
})
export class GetPracticesService {

  constructor(private http: HttpClient) { }

  getPractices(): Observable<Practice[]> {
    const fetchResultsObservable$: Observable<GetPracticesResults[]> =
              ReusableServiceCalls.callGetService<GetPracticesResults[]>(this.http, apiUrls.getPractices);

    return fetchResultsObservable$.pipe(
      map(fetchResults => fetchResults.map(fetchResult => (
      {
        id: fetchResult.id,
        practiceName: fetchResult.practiceName,
        practiceShortDescription: fetchResult.practiceShortDescription,
        practiceLongDescription: fetchResult.practiceLongDescription,
        practiceImage: fetchResult.practiceImage
      } as Practice
    ))));
  }
}
