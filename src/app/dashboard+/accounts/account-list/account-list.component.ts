import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Account} from "../../shared/models/account.model";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
  @Input() accounts: Array<Account>;

  @Output() destroy = new EventEmitter<Number>();

  private _destroy(index: number): void {
    this.destroy.emit(index);
  }

}
