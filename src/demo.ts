import { RapidappClient } from './index';

async function main() {
    const apiKey = process.env.RAPIDAPP_API_KEY;
    if (!apiKey) {
        console.error('Please set RAPIDAPP_API_KEY environment variable');
        process.exit(1);
    }

    const client = new RapidappClient({
        apiKey,
        insecure: false,
    });

    try {
        // Create a new postgres database
        console.log('Creating postgres database...');
        const postgres = await client.createPostgres('demo-postgres');
        console.log('Created postgres:', postgres.toObject());

        // Wait a bit for the database to be ready
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Get the created database
        console.log('\nGetting postgres database...');
        const retrieved = await client.getPostgres(postgres.getId());
        console.log('Retrieved postgres:', retrieved.toObject());

        // List all databases
        console.log('\nListing all postgres databases...');
        const list = await client.listPostgres();
        console.log('Found databases:', list.getItemsList().map(item => item.toObject()));

        // Delete the database
        console.log('\nDeleting postgres database...');
        await client.deletePostgres(postgres.getId());
        console.log('Database deleted successfully');

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Always close the client
        //client.close();
    }
}

// Run the demo
main().catch(console.error);