import { AxiosInstance } from "axios";

import { IAxiosService } from "./AxiosService.ts";
import { IEnvProfileService } from "./envProfileService.ts";
import { IEnvVarService } from "./envVarService.ts";
import { IHttpClient } from "./httpClient.ts";
//import { IPushNotificationService } from './PushNotificationService';

export interface IDependencies {
  envProfileService: IEnvProfileService;
  envVarService: IEnvVarService;
  axiosInstance: AxiosInstance;
  httpClient: IHttpClient;
  axiosService: IAxiosService;
  //  pushNotificationService?: IPushNotificationService;
}
