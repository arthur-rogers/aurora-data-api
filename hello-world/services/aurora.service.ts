import { drizzle } from 'drizzle-orm/aws-data-api/pg';
import { RDSDataClient } from '@aws-sdk/client-rds-data';
import { fromIni } from '@aws-sdk/credential-providers';

const rdsClient = new RDSDataClient({
    // credentials: fromIni({ profile: process.env['PROFILE'] }),
    region: 'eu-central-1',
});

export const db = drizzle(rdsClient, {
    database: process.env.DB_NAME!,
    secretArn: process.env['AURORA_SECRET_ARN']!,
    resourceArn: process.env['AURORA_CLUSTER_ARN']!,
});
