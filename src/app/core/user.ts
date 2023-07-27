import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';



//Chave utilizada para guardar o userprofile em sessao
//O Profile é o objeto devolvido pelo keycloak após a realização do login
const KEY_USERPROFILE = 'userprofile';


@Injectable()
export class User { 
 
  constructor(protected keycloak:KeycloakService) {
 
  }

  //Realize o logoff do usuario corrente, chamando o keycloak
  logoff() {
    
    //Devolve para a tela inicial
    let lUrlInicio:string=window.location.href;
    lUrlInicio=lUrlInicio.slice(0,lUrlInicio.indexOf('/#')+1);
   

    this.keycloak.logout(lUrlInicio).then(obj=>{
      this.profile=null;
      
    })
  }

  
  get username():string{
    return this.profile.username;
  }

  get firstName():string{
    return this.profile.firstName;
  }

  get lastName():string{
    return this.profile.lastName;
  }

  get email():string{
    return this.profile.email;
  }

  get logado(): boolean {
    return this.profile!=null;

  }

  get profile(): any {

    let lStr = sessionStorage.getItem(KEY_USERPROFILE);
    if (lStr != '' && lStr != null && lStr != undefined) {
      return JSON.parse(lStr);

    } else {

      return null;
    }


  }

  set profile(pUserProfile: any) {

    if (pUserProfile != null) {
      console.log("PROFILE=",pUserProfile)
      sessionStorage.setItem(KEY_USERPROFILE, JSON.stringify(pUserProfile));
    } else {
      
      sessionStorage.removeItem(KEY_USERPROFILE);
    }
   
    
  }


}
