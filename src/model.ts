import { AxiosInstance } from "axios";
import { IEnvProfileService } from "./services/envProfileService";
import { IEnvVarService } from "./services/envVarService";
import { IHttpClient } from "./services/httpClient";
import { IAxiosService } from "./services/AxiosService";

export interface IEvents {
  body: any;
  code: number;
  message: string;
}

export interface IDependencies {
  envProfileService: IEnvProfileService;
  envVarService: IEnvVarService;
  axiosInstance: AxiosInstance;
  httpClient: IHttpClient;
  axiosService: IAxiosService;
  //  pushNotificationService?: IPushNotificationService;
}

export interface IEventData {
    id: number;
    title: string;
    date: string; 
    imgUrl: string;
}



//Premium Event Requests and Search Event
export interface ApiResponse {
  code: number;
  message: string;
  body: Event[];
}

export interface Event {
  idEvent: string,
  coverPhoto: string,
  eventName: string,
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string
}