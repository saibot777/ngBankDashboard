import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Account} from "../../shared/models/account.model";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent {
  @Input() error: string;
  @Output() store = new EventEmitter<Account>();

  private _store(title: any, description: any, balance: any) {
    const account: Account = new Account(
      0,
      title.value,
      description.value,
      balance.value
    );
    this.store.emit(account);
    title.value = '';
    description.value = '';
    balance.value = 0;
  }

}
