export interface SystemSpec {
  name?: string;
  host: string;
  port: number;
  certs: {
    ca?: string;
    hostCert: string;
    hostKey: string;
  };
  client?: { path: string };
}

export interface ClientSettings {
  id: string;
  ip: string[];
  user: string;
}

export interface CastleWarehouseAccess {
  url: string;
}

export interface Configuration {
  system: SystemSpec;
  user: { "ask-id": string };
  "castle-warehouse": CastleWarehouseAccess;
}

export interface CheckedConfiguration extends Configuration {
  isValid?: boolean;
}

export interface SystemStatus {
  startedAt: number;
  configuration: {
    content: CheckedConfiguration;
    errors: string[] | undefined;
    valid: CheckedConfiguration;
  };
}
