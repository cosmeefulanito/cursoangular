// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth0: {
    domain: 'nicoavila.auth0.com',
    clientID: 'x568hv1fgFUsSilzptJfCTbNfT0rv4YU',
    connection: 'Username-Password-Authentication',
    audience: 'https://nicoavila.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile email user_metadata'
  },
  returnUrl: 'http://localhost:4200',
  apiEndpoint: 'http://api.nicoavila.cl/'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
