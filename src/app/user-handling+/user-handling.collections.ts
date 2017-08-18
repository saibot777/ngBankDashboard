/**
 * Created by Stefan Trajkovic
 */
import {AuthService} from "./shared/services/auth.service";
import {AuthGuardService} from "./shared/services/auth-guard.service";
import {LoginComponent} from "./login/login.component";

export const userHandlingComponents = [
  LoginComponent
];

export const userHandlingServices = [
  AuthService,
  AuthGuardService
];
