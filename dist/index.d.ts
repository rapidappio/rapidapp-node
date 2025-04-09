import { Postgres, PostgresList, PostgresId } from '../generated/postgres/postgres_pb';
export interface RapidappClientConfig {
    host?: string;
    port?: number;
    apiKey: string;
}
export declare class RapidappClient {
    private client;
    private apiKey;
    constructor(config: RapidappClientConfig);
    private getMetadata;
    createPostgres(name: string): Promise<PostgresId>;
    getPostgres(id: string): Promise<Postgres>;
    listPostgres(): Promise<PostgresList>;
    deletePostgres(id: string): Promise<void>;
}
export * from '../generated/postgres/postgres_pb';
