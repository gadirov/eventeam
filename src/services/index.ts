import { AxiosService } from "./AxiosService.ts";
import { EnvProfileService } from "./envProfileService.ts";
import { EnvVarService } from "./envVarService.ts";
import { HttpClient } from "./httpClient.ts";
import { IDependencies } from "./models.ts";
//import { PushNotificationService } from './PushNotificationService';

export function buildDependencies(): IDependencies {
  const _envVarService = new EnvVarService();
  const _envProfileService = new EnvProfileService(_envVarService);
  const _axiosService = new AxiosService();
  const _axiosInstance = _axiosService.axiosInstance;
  const _hhtpClient = new HttpClient(_axiosInstance);
  //const pushNotificationService = new PushNotificationService(_envProfileService);

  const deps: IDependencies = {
    envProfileService: _envProfileService,
    envVarService: _envVarService,
    axiosInstance: _axiosInstance,
    httpClient: _hhtpClient,
    axiosService: _axiosService,
    //pushNotificationService,
  };

  return deps;
}

export const dependencies = buildDependencies();
export const envProfileService = dependencies.envProfileService;
export const envVarService = dependencies.envVarService;
export const axiosInstance = dependencies.axiosInstance;
