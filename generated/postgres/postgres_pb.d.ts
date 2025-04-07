// package: postgres
// file: postgres/postgres.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class CreateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRequest;
    static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
    export type AsObject = {
        name: string,
    }
}

export class Postgres extends jspb.Message { 
    getId(): string;
    setId(value: string): Postgres;
    getName(): string;
    setName(value: string): Postgres;
    getUsername(): string;
    setUsername(value: string): Postgres;
    getPassword(): string;
    setPassword(value: string): Postgres;
    getDatabase(): string;
    setDatabase(value: string): Postgres;
    getHost(): string;
    setHost(value: string): Postgres;
    getPort(): number;
    setPort(value: number): Postgres;
    getStatus(): string;
    setStatus(value: string): Postgres;
    getErrorReason(): string;
    setErrorReason(value: string): Postgres;

    hasCmd(): boolean;
    clearCmd(): void;
    getCmd(): Cmd | undefined;
    setCmd(value?: Cmd): Postgres;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Postgres.AsObject;
    static toObject(includeInstance: boolean, msg: Postgres): Postgres.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Postgres, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Postgres;
    static deserializeBinaryFromReader(message: Postgres, reader: jspb.BinaryReader): Postgres;
}

export namespace Postgres {
    export type AsObject = {
        id: string,
        name: string,
        username: string,
        password: string,
        database: string,
        host: string,
        port: number,
        status: string,
        errorReason: string,
        cmd?: Cmd.AsObject,
    }
}

export class Cmd extends jspb.Message { 
    getCli(): string;
    setCli(value: string): Cmd;
    getGo(): string;
    setGo(value: string): Cmd;
    getJava(): string;
    setJava(value: string): Cmd;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cmd.AsObject;
    static toObject(includeInstance: boolean, msg: Cmd): Cmd.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cmd, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cmd;
    static deserializeBinaryFromReader(message: Cmd, reader: jspb.BinaryReader): Cmd;
}

export namespace Cmd {
    export type AsObject = {
        cli: string,
        go: string,
        java: string,
    }
}

export class PostgresList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Postgres>;
    setItemsList(value: Array<Postgres>): PostgresList;
    addItems(value?: Postgres, index?: number): Postgres;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresList.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresList): PostgresList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresList;
    static deserializeBinaryFromReader(message: PostgresList, reader: jspb.BinaryReader): PostgresList;
}

export namespace PostgresList {
    export type AsObject = {
        itemsList: Array<Postgres.AsObject>,
    }
}

export class GetRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRequest;
    static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
    export type AsObject = {
        id: string,
    }
}

export class DeleteRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        id: string,
    }
}

export class PostgresId extends jspb.Message { 
    getId(): string;
    setId(value: string): PostgresId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresId.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresId): PostgresId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresId;
    static deserializeBinaryFromReader(message: PostgresId, reader: jspb.BinaryReader): PostgresId;
}

export namespace PostgresId {
    export type AsObject = {
        id: string,
    }
}
