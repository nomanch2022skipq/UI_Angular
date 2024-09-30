import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from '../../services/api.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  const apiService = inject(ApiService);
  const router = inject(Router);

  if (apiService.isAuthenticated()) {
    
    if (route.routeConfig?.path === 'login' || route.routeConfig?.path === 'register') {
      router.navigate(['/']); 
      return false;
    }
    return true;
  }

  if (route.routeConfig?.path !== 'login' && route.routeConfig?.path !== 'register') {
    router.navigate(['/login']); 
  }
  return route.routeConfig?.path === 'login' || route.routeConfig?.path === 'register';
};
