import { Routes } from "@angular/router";
import { HomePageComponent } from "../components/home-page/home-page.component";
import { ContactUsComponent } from "../components/contact-us/contact-us.component";

export const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "contactUs",
    component: ContactUsComponent,
  },
  {
    path: "**",
    redirectTo: "",
    component: HomePageComponent,
  },
];
