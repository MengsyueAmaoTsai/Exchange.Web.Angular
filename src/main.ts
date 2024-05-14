import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { provideFluentDesignSystem, allComponents } from '@fluentui/web-components';

provideFluentDesignSystem().register(allComponents);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
