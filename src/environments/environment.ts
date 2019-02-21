// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const client_id = '244410964693221377';
const admins = ['143037788969762816'];

export const environment = {
  production: false,
  api_url: 'http://localhost:5000/',
  api_username: 'nya',
  api_password: 'plsnohack',
  discord_client_id: client_id,
  discord_admin_ids: admins,
  discord_login_url: 'https://discordapp.com/api/oauth2/authorize?client_id=' + client_id + '&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fdiscordlogin&response_type=token&scope=identify%20guilds%20connections'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
