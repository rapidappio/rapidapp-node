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

## Support

For bug reports, feature requests, and general support, please visit our [GitHub Issues repository](https://github.com/rapidappio/issues). We welcome community contributions and feedback to help improve RapidApp.

## License

MIT License

Copyright (c) 2024 RapidApp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
