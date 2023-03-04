import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './10-routing/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
