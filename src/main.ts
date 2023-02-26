import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './08-ngrx/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
