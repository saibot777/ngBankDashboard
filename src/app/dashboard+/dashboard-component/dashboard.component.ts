import { Component } from '@angular/core';
import {Account} from "../shared/models/account.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  public accounts: Array<Account>;
  private accountLimit: number;
  private createAccountError: string;
  private nextId: number;

  constructor() {
    this.accounts = [
      {
        id: 1,
        title: 'xxx Bank',
        description: 'Main bank account.',
        balance: 567
      },
      {
        id: 2,
        title: 'yyy Bank',
        description: null,
        balance: 322
      }
    ];

    this.nextId = 3;
    this.accountLimit = 3;
    this.createAccountError = '';
  }

  private storeAccount(account: Account): void {
    if (this.accounts.length < this.accountLimit) {
      account.id = this.nextId++;
      this.accounts.push(account);
    } else {
      this.createAccountError = 'Only ' + this.accountLimit + ' account(s) allowed.';
    }
  }

  private destroyAccount(index: number): void {
    this.accounts.splice(index, 1);
  }
}
