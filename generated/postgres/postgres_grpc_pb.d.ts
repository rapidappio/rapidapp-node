// package: postgres
// file: postgres/postgres.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as postgres_postgres_pb from "../postgres/postgres_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IPostgresServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IPostgresServiceService_ICreate;
    list: IPostgresServiceService_IList;
    get: IPostgresServiceService_IGet;
    delete: IPostgresServiceService_IDelete;
}

interface IPostgresServiceService_ICreate extends grpc.MethodDefinition<postgres_postgres_pb.CreateRequest, postgres_postgres_pb.PostgresId> {
    path: "/postgres.PostgresService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<postgres_postgres_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<postgres_postgres_pb.CreateRequest>;
    responseSerialize: grpc.serialize<postgres_postgres_pb.PostgresId>;
    responseDeserialize: grpc.deserialize<postgres_postgres_pb.PostgresId>;
}
interface IPostgresServiceService_IList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, postgres_postgres_pb.PostgresList> {
    path: "/postgres.PostgresService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<postgres_postgres_pb.PostgresList>;
    responseDeserialize: grpc.deserialize<postgres_postgres_pb.PostgresList>;
}
interface IPostgresServiceService_IGet extends grpc.MethodDefinition<postgres_postgres_pb.GetRequest, postgres_postgres_pb.Postgres> {
    path: "/postgres.PostgresService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<postgres_postgres_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<postgres_postgres_pb.GetRequest>;
    responseSerialize: grpc.serialize<postgres_postgres_pb.Postgres>;
    responseDeserialize: grpc.deserialize<postgres_postgres_pb.Postgres>;
}
interface IPostgresServiceService_IDelete extends grpc.MethodDefinition<postgres_postgres_pb.DeleteRequest, google_protobuf_empty_pb.Empty> {
    path: "/postgres.PostgresService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<postgres_postgres_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<postgres_postgres_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const PostgresServiceService: IPostgresServiceService;

export interface IPostgresServiceServer {
    create: grpc.handleUnaryCall<postgres_postgres_pb.CreateRequest, postgres_postgres_pb.PostgresId>;
    list: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, postgres_postgres_pb.PostgresList>;
    get: grpc.handleUnaryCall<postgres_postgres_pb.GetRequest, postgres_postgres_pb.Postgres>;
    delete: grpc.handleUnaryCall<postgres_postgres_pb.DeleteRequest, google_protobuf_empty_pb.Empty>;
}

export interface IPostgresServiceClient {
    create(request: postgres_postgres_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.PostgresId) => void): grpc.ClientUnaryCall;
    create(request: postgres_postgres_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.PostgresId) => void): grpc.ClientUnaryCall;
    create(request: postgres_postgres_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.PostgresId) => void): grpc.ClientUnaryCall;
    list(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.PostgresList) => void): grpc.ClientUnaryCall;
    list(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.PostgresList) => void): grpc.ClientUnaryCall;
    list(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.PostgresList) => void): grpc.ClientUnaryCall;
    get(request: postgres_postgres_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.Postgres) => void): grpc.ClientUnaryCall;
    get(request: postgres_postgres_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.Postgres) => void): grpc.ClientUnaryCall;
    get(request: postgres_postgres_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.Postgres) => void): grpc.ClientUnaryCall;
    delete(request: postgres_postgres_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: postgres_postgres_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: postgres_postgres_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class PostgresServiceClient extends grpc.Client implements IPostgresServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: postgres_postgres_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.PostgresId) => void): grpc.ClientUnaryCall;
    public create(request: postgres_postgres_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.PostgresId) => void): grpc.ClientUnaryCall;
    public create(request: postgres_postgres_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.PostgresId) => void): grpc.ClientUnaryCall;
    public list(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.PostgresList) => void): grpc.ClientUnaryCall;
    public list(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.PostgresList) => void): grpc.ClientUnaryCall;
    public list(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.PostgresList) => void): grpc.ClientUnaryCall;
    public get(request: postgres_postgres_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.Postgres) => void): grpc.ClientUnaryCall;
    public get(request: postgres_postgres_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.Postgres) => void): grpc.ClientUnaryCall;
    public get(request: postgres_postgres_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: postgres_postgres_pb.Postgres) => void): grpc.ClientUnaryCall;
    public delete(request: postgres_postgres_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: postgres_postgres_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: postgres_postgres_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
