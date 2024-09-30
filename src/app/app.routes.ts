import { Routes } from "@angular/router";
import { HomePageComponent } from "../components/home-page/home-page.component";
import { ContactUsComponent } from "../components/contact-us/contact-us.component";
import { LoginPageComponent } from "../components/login-page/login-page.component";
import { RegisterPageComponent } from "../components/register-page/register-page.component";
import { authGuard } from "./guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    canActivate: [authGuard]  // Protect home page
  },
  {
    path: "contactUs",
    component: ContactUsComponent,
    canActivate: [authGuard]  // Protect contact us page
  },
  {
    path: "login",
    component: LoginPageComponent,  // Public login page
    canActivate: [authGuard]  // Guard to prevent access if logged in
  },
  {
    path: "register",
    component: RegisterPageComponent,  // Public register page
    canActivate: [authGuard]  // Guard to prevent access if logged in
  },
  {
    path: "**",
    redirectTo: "login"  // Redirect to login for unknown routes
  },
];
