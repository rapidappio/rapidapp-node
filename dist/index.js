"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RapidappClient = void 0;
const grpc = __importStar(require("@grpc/grpc-js"));
const postgres_pb_1 = require("../generated/postgres/postgres_pb");
const postgres_grpc_pb_1 = require("../generated/postgres/postgres_grpc_pb");
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
class RapidappClient {
    constructor(config) {
        const host = config.host || 'api.rapidapp.io';
        const port = config.port || 443;
        const target = `${host}:${port}`;
        const credentials = grpc.credentials.createSsl();
        // Initialize the gRPC client
        this.client = new postgres_grpc_pb_1.PostgresServiceClient(target, credentials);
        this.apiKey = config.apiKey;
    }
    getMetadata() {
        const metadata = new grpc.Metadata();
        metadata.add('x-api-key', this.apiKey);
        return metadata;
    }
    async createPostgres(name) {
        return new Promise((resolve, reject) => {
            const request = new postgres_pb_1.CreateRequest();
            request.setName(name);
            this.client.create(request, this.getMetadata(), (error, response) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(response);
            });
        });
    }
    async getPostgres(id) {
        return new Promise((resolve, reject) => {
            const request = new postgres_pb_1.GetRequest();
            request.setId(id);
            this.client.get(request, this.getMetadata(), (error, response) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(response);
            });
        });
    }
    async listPostgres() {
        return new Promise((resolve, reject) => {
            this.client.list(new empty_pb_1.Empty(), this.getMetadata(), (error, response) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(response);
            });
        });
    }
    async deletePostgres(id) {
        return new Promise((resolve, reject) => {
            const request = new postgres_pb_1.DeleteRequest();
            request.setId(id);
            this.client.delete(request, this.getMetadata(), (error) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve();
            });
        });
    }
}
exports.RapidappClient = RapidappClient;
__exportStar(require("../generated/postgres/postgres_pb"), exports);
