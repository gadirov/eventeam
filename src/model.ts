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

export interface IEvent {
  idEvent: string;
  coverPhoto: string;
  eventName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

export interface IFormAccount {
  username: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  profilePhoto: string;
}

export interface IContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ICategory {
  count: number;
  categoryName: string;
}
export interface IUpcomingPageCardItem {
  idEvent: string;
  ticketType: string;
  eventName: string;
  startDate: string;
  startTime: string;
  coverPhoto: string;
}

export interface IEventProps {
  idEvent: string;
  coverPhoto: string;
  eventName: string;
}
