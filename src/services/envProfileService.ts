import { IEnvVarService } from './envVarService.ts';

export interface IEnvProfileService {
  envProfile: 'local' | 'dev' | 'prod' | 'test';
}

export class EnvProfileService implements IEnvProfileService {
  public constructor(private readonly envVarService: IEnvVarService) {}

  public get envProfile(): 'local' | 'dev' | 'prod' | 'test' {
    if (this.envVarService.infraEnv === 'production') {
      return 'prod';
    } else if (
      this.envVarService.infraEnv === 'development' &&
      this.envVarService.nodeEnv === 'production'
    ) {
      return 'dev';
    } else if (
      this.envVarService.infraEnv === 'test' &&
      this.envVarService.nodeEnv === 'production'
    ) {
      return 'test';
    } else {
      return 'local';
    }
  }
}
