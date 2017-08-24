import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account} from "../../shared/models/account.model";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {
  @Input() error: string;
  @Output() store = new EventEmitter<Account>();
  account: Account;

  ngOnInit () {
    this.account = {
      id: 1,
      title: "",
      description: "",
      balance: 0
    };
  }

  save(model: Account, isValid: boolean) {
    // check if model is valid
    // if valid, call API to save customer
    return this.store.emit(model);
  }
  public _store(title: any, description: any, balance: any) {
    const account: Account = new Account(
      0,
      title.value,
      description.value,
      balance.value
    );
    this.store.emit(account);
  }

}
