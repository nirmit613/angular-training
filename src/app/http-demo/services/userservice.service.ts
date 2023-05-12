import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment as env } from 'src/environments/environment.development';
import { IUser } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  private baseUrl: string = env.baseUrl;

  constructor(private http: HttpClient) {}

  public getUser(): Observable<IUser[]> {
    return this.http.get(env.baseUrl + 'users.json').pipe(
      map((res: { [k: string]: any }) => {
        const users: any = [];
        if (res) {
          Object.keys(res).forEach((id) => {
            let val: any = res[id];
            let obj = { id, ...val };
            users.push(obj);
          });
        }
        return users;
      })
    );
  }

  public addUser(user: IUser): Observable<any> {
    return this.http.post(this.baseUrl + 'users.json', user);
  }
  public updateUser(id: string, user: IUser): Observable<any> {
    return this.http.put(this.baseUrl + `users/${id}.json`, user);
  }
  public deleteUser(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `users/${id}.json`);
  }
}
