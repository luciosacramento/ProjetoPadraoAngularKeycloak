import { KeycloakService } from "keycloak-angular";
import { environment } from "src/environment/environment";


export function initializeKeycloak(
    keycloak: KeycloakService
    ) {
      console.log("INICIANDO!")
      return () =>
        keycloak.init({
          config: {
            url: environment.keycloak_url,
            realm: environment.keycloak_realm,
            clientId: environment.clientId
            
          },
          initOptions: {
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri:
              window.location.origin + '/assets/silent-check-sso.html'
          }
        });
}
