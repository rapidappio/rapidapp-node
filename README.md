# RapidApp Node.js Client

A Node.js client library for RapidApp, allowing you to manage and interact with RapidApp services programmatically.

## Installation

```bash
npm install rapidapp-node
```

## Prerequisites

- Node.js (v12 or higher)
- A RapidApp API key which you can generate one [here](https://rapidapp.io)

## Configuration

Set your RapidApp API key as an environment variable:

```bash
export RAPIDAPP_API_KEY='your-api-key-here'
```

## Usage

Here's a basic example of how to use the RapidApp Node.js client:

```typescript
import { RapidappClient } from 'rapidapp-node';

// Initialize the client
const client = new RapidappClient({
    apiKey: process.env.RAPIDAPP_API_KEY,
    insecure: false,
});

// Create a new Postgres database
const postgres = await client.createPostgres('my-database');

// Get database details
const database = await client.getPostgres(postgres.getId());

// List all databases
const databases = await client.listPostgres();

// Delete a database
await client.deletePostgres(postgres.getId());
```

## Features

- Create Postgres databases
- Retrieve database information
- List all databases
- Delete databases
- Secure API key management
- TypeScript support

## Error Handling

The client includes built-in error handling. Always wrap your API calls in try-catch blocks:

```typescript
try {
    const postgres = await client.createPostgres('my-database');
    console.log('Database created:', postgres.toObject());
} catch (error) {
    console.error('Error:', error);
}
```
