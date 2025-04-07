// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var postgres_postgres_pb = require('../postgres/postgres_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postgres_CreateRequest(arg) {
  if (!(arg instanceof postgres_postgres_pb.CreateRequest)) {
    throw new Error('Expected argument of type postgres.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postgres_CreateRequest(buffer_arg) {
  return postgres_postgres_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postgres_DeleteRequest(arg) {
  if (!(arg instanceof postgres_postgres_pb.DeleteRequest)) {
    throw new Error('Expected argument of type postgres.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postgres_DeleteRequest(buffer_arg) {
  return postgres_postgres_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postgres_GetRequest(arg) {
  if (!(arg instanceof postgres_postgres_pb.GetRequest)) {
    throw new Error('Expected argument of type postgres.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postgres_GetRequest(buffer_arg) {
  return postgres_postgres_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postgres_Postgres(arg) {
  if (!(arg instanceof postgres_postgres_pb.Postgres)) {
    throw new Error('Expected argument of type postgres.Postgres');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postgres_Postgres(buffer_arg) {
  return postgres_postgres_pb.Postgres.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postgres_PostgresId(arg) {
  if (!(arg instanceof postgres_postgres_pb.PostgresId)) {
    throw new Error('Expected argument of type postgres.PostgresId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postgres_PostgresId(buffer_arg) {
  return postgres_postgres_pb.PostgresId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_postgres_PostgresList(arg) {
  if (!(arg instanceof postgres_postgres_pb.PostgresList)) {
    throw new Error('Expected argument of type postgres.PostgresList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_postgres_PostgresList(buffer_arg) {
  return postgres_postgres_pb.PostgresList.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostgresServiceService = exports.PostgresServiceService = {
  create: {
    path: '/postgres.PostgresService/Create',
    requestStream: false,
    responseStream: false,
    requestType: postgres_postgres_pb.CreateRequest,
    responseType: postgres_postgres_pb.PostgresId,
    requestSerialize: serialize_postgres_CreateRequest,
    requestDeserialize: deserialize_postgres_CreateRequest,
    responseSerialize: serialize_postgres_PostgresId,
    responseDeserialize: deserialize_postgres_PostgresId,
  },
  list: {
    path: '/postgres.PostgresService/List',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: postgres_postgres_pb.PostgresList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_postgres_PostgresList,
    responseDeserialize: deserialize_postgres_PostgresList,
  },
  get: {
    path: '/postgres.PostgresService/Get',
    requestStream: false,
    responseStream: false,
    requestType: postgres_postgres_pb.GetRequest,
    responseType: postgres_postgres_pb.Postgres,
    requestSerialize: serialize_postgres_GetRequest,
    requestDeserialize: deserialize_postgres_GetRequest,
    responseSerialize: serialize_postgres_Postgres,
    responseDeserialize: deserialize_postgres_Postgres,
  },
  delete: {
    path: '/postgres.PostgresService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: postgres_postgres_pb.DeleteRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_postgres_DeleteRequest,
    requestDeserialize: deserialize_postgres_DeleteRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.PostgresServiceClient = grpc.makeGenericClientConstructor(PostgresServiceService, 'PostgresService');
