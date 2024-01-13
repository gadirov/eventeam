import * as React from 'react';

import { IDependencies } from './models';

export const DependenciesContext = React.createContext<IDependencies>({
  envProfileService: null as any,
  envVarService: null as any,
  axiosInstance: null as any,
  httpClient: null as any,
  axiosService: null as any,
  //pushNotificationService: null as any,
});

export const DependenciesProvider: React.FC<
  React.PropsWithChildren<{ dependencies: IDependencies }>
> = React.memo(({ dependencies, children }) => {
  return (
    <DependenciesContext.Provider value={dependencies}>{children}</DependenciesContext.Provider>
  );
});

export const DependenciesConsumer = DependenciesContext.Consumer;
