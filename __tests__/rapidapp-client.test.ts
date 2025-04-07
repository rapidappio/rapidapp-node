import { RapidappClient } from '../src/index';
import * as grpc from '@grpc/grpc-js';
import { Postgres, PostgresList } from '../generated/postgres/postgres_pb';

// Mock the gRPC client
jest.mock('@grpc/grpc-js', () => {
  const originalModule = jest.requireActual('@grpc/grpc-js');
  return {
    ...originalModule,
    Client: jest.fn().mockImplementation(() => {
      return {
        create: jest.fn().mockImplementation((request, metadata, callback) => {
          const postgres = new Postgres();
          postgres.setId('test-id');
          postgres.setName('test-postgres');
          callback(null, postgres);
        }),
        get: jest.fn().mockImplementation((request, metadata, callback) => {
          const postgres = new Postgres();
          postgres.setId('test-id');
          postgres.setName('test-postgres');
          callback(null, postgres);
        }),
        list: jest.fn().mockImplementation((request, metadata, callback) => {
          const postgresList = new PostgresList();
          const postgres = new Postgres();
          postgres.setId('test-id');
          postgres.setName('test-postgres');
          postgresList.addItems(postgres);
          callback(null, postgresList);
        }),
        delete: jest.fn().mockImplementation((request, metadata, callback) => {
          callback(null);
        }),
        close: jest.fn(),
      };
    }),
    credentials: {
      createInsecure: jest.fn().mockReturnValue({}),
      createSsl: jest.fn().mockReturnValue({}),
    },
    Metadata: jest.fn().mockImplementation(() => {
      return {
        add: jest.fn(),
      };
    }),
  };
});

describe('RapidappClient', () => {
  let client: RapidappClient;

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();

    // Create a new client instance for each test
    client = new RapidappClient({
      apiKey: 'test-api-key',
    });
  });

  afterEach(() => {
    client.close();
  });

  test('should use default host and port when not provided', () => {
    expect(grpc.Client).toHaveBeenCalledWith('api.rapidapp.io:443', expect.any(Object));
  });

  test('should use custom host and port when provided', () => {
    const customClient = new RapidappClient({
      host: 'custom-host',
      port: 50051,
      apiKey: 'test-api-key',
    });

    expect(grpc.Client).toHaveBeenCalledWith('custom-host:50051', expect.any(Object));
    customClient.close();
  });

  test('should create a postgres database', async () => {
    const result = await client.createPostgres('test-postgres');

    expect(result.getId()).toBe('test-id');
    expect(result.getName()).toBe('test-postgres');
    expect(client['client'].create).toHaveBeenCalled();
  });

  test('should get a postgres database', async () => {
    const result = await client.getPostgres('test-id');

    expect(result.getId()).toBe('test-id');
    expect(result.getName()).toBe('test-postgres');
    expect(client['client'].get).toHaveBeenCalled();
  });

  test('should list postgres databases', async () => {
    const result = await client.listPostgres();

    expect(result.getItemsList().length).toBe(1);
    expect(result.getItemsList()[0].getId()).toBe('test-id');
    expect(result.getItemsList()[0].getName()).toBe('test-postgres');
    expect(client['client'].list).toHaveBeenCalled();
  });

  test('should delete a postgres database', async () => {
    await client.deletePostgres('test-id');

    expect(client['client'].delete).toHaveBeenCalled();
  });

  test('should close the client', () => {
    client.close();
    expect(client['client'].close).toHaveBeenCalled();
  });
});