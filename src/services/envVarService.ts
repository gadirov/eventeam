export interface IEnvVarService {
  readonly nodeEnv: 'development' | 'production';
  readonly infraEnv: 'development' | 'production' | 'test';
}

// Incapsulates access to process.env.* variables.
export class EnvVarService implements IEnvVarService {
  public readonly nodeEnv: 'development' | 'production';
  public readonly infraEnv: 'development' | 'production' | 'test';

  constructor() {
    this.infraEnv = process.env.INFRA_ENV as any;
    this.nodeEnv = process.env.NODE_ENV as any;
  }
}
