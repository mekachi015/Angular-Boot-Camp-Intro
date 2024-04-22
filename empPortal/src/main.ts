import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//Entry Point for your application 

//Front end application

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
