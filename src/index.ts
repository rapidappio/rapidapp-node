import * as grpc from '@grpc/grpc-js';
import { Postgres, PostgresList, CreateRequest, GetRequest, DeleteRequest, PostgresId } from '../generated/postgres/postgres_pb';
import { PostgresServiceClient } from '../generated/postgres/postgres_grpc_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
export interface RapidappClientConfig {
  host?: string;
  port?: number;
  apiKey: string;
}

export class RapidappClient {
  private client: PostgresServiceClient;
  private apiKey: string;

  constructor(config: RapidappClientConfig) {
    const host = config.host || 'api.rapidapp.io';
    const port = config.port || 443;
    const target = `${host}:${port}`;
    const credentials = grpc.credentials.createSsl();

    // Initialize the gRPC client
    this.client = new PostgresServiceClient(target, credentials);
    this.apiKey = config.apiKey;
  }

  private getMetadata(): grpc.Metadata {
    const metadata = new grpc.Metadata();
    metadata.add('x-api-key', this.apiKey);
    return metadata;
  }

  async createPostgres(name: string): Promise<PostgresId> {
    return new Promise((resolve, reject) => {
      const request = new CreateRequest();
      request.setName(name);

      this.client.create(request, this.getMetadata(), (error: any, response: PostgresId) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(response);
      });
    });
  }

  async getPostgres(id: string): Promise<Postgres> {
    return new Promise((resolve, reject) => {
      const request = new GetRequest();
      request.setId(id);

      this.client.get(request, this.getMetadata(), (error: any, response: Postgres) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(response);
      });
    });
  }

  async listPostgres(): Promise<PostgresList> {
    return new Promise((resolve, reject) => {
      this.client.list(new Empty(), this.getMetadata(), (error: any, response: PostgresList) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(response);
      });
    });
  }

  async deletePostgres(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new DeleteRequest();
      request.setId(id);

      this.client.delete(request, this.getMetadata(), (error: any) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }

}

export * from '../generated/postgres/postgres_pb';