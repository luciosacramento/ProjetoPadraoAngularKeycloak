import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { KeycloakAuthGuard, KeycloakService } from "keycloak-angular";
import { User } from "./user";
import { Utils } from "./utils";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService,
    protected readonly user:User,
    protected readonly utils:Utils
  ) {
    super(router, keycloak);
  }

  async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
console.log("AUTHGUARD!")
    if (!this.authenticated) {
      console.log("1!")
      this.user.profile=null;
      
      await this.keycloak.login({
        redirectUri: window.location.href,
      });

    }
    else {
      console.log("2!")
      //Já autenticado no keycloak. Verifica se já guardou o profile e usuario
      if (!this.user.logado) {

        let lProfile = null;
        //Obtem o profile do usuario corrente
        await this.keycloak.loadUserProfile().then(result => {
          lProfile = result;

          this.user.profile=lProfile;
          this.utils.exibirInformacao(`Bem vindo ${this.user.firstName}!`)

        });

      
      }

    }

    return this.authenticated;

  }


}