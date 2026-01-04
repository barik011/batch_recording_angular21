import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { GlobalConstant } from '../constants/Global.constant';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const localData = localStorage.getItem(GlobalConstant.LOCAL_STORAGE_KEYS.LOCAL_KEY_LOGIN);
  if(localData!=null){
    return true;
  }
  else{
    router.navigateByUrl('/login')
    return false;
  }
  
};
