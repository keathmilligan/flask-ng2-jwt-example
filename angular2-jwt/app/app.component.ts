import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';

const APP_SERVER = 'http://localhost:5000/';
const USERNAME = 'user';
const PASSWORD = 'password';

@Component({
  selector: 'my-app',
  template: `
    <h1>Flask/Angular 2 JWT Example</h1>
    <div *ngFor="let message of messages">
      {{ message }}
    </div>
  `
})
export class AppComponent implements OnInit {
  private messages: Array<string> = [];

  constructor(private http: Http,
              private authHttp: AuthHttp) { }

  ngOnInit() {
    this.getUnprotected();
  }

  // get the unprotected resource
  getUnprotected() {
    this.messages.push('Requesting unprotected resource');
    this.http
      .get(APP_SERVER + 'unprotected')
      .map((response: Response) => response.json())
      .subscribe(
      (data) => {
        this.messages.push(`Got unprotected response: ${data.message}`);

        this.login();
      },
      (error) => {
        this.messages.push(`Unprotected request error: ${error}`);
      }
      );
  }

  // send username/password and get the token
  login() {
    let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    this.messages.push('Logging in');
    this.http
      .post(APP_SERVER + 'auth',
      JSON.stringify({ 'username': USERNAME, 'password': PASSWORD }),
      options)
      .map((response: Response) => response.json())
      .subscribe(
      (data) => {
        // save the token in local storage
        let token = data.access_token;
        localStorage.setItem('id_token', token);
        this.messages.push(`Login successful, token saved.`);

        let jwtHelper: JwtHelper = new JwtHelper();
        this.messages.push(`expiration: ${jwtHelper.getTokenExpirationDate(token)}`);
        this.messages.push(`is expired: ${jwtHelper.isTokenExpired(token)}`);
        this.messages.push(`decoded: ${JSON.stringify(jwtHelper.decodeToken(token))}`);

        // now get the protected resource
        this.getProtected();
      },
      (error) => {
        this.messages.push(`Login failed: ${error}`);
      }
      );
  }

  // get a protected resource the the token
  getProtected() {
    this.messages.push('Requesting protected resource');
    this.authHttp
      .get(APP_SERVER + 'protected')
      .map((response: Response) => response.json())
      .subscribe(
      (data) => {
        this.messages.push(`Got protected resource: msg: ${data.message}, identity: ${data.current_identity}`);
      },
      (error) => {
        this.messages.push(`Protected request failed: ${error}`);
      }
      );
  }
}
