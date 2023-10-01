import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { UsersService } from './services/users.service';

export const getUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.info(event);
    try {
        const { userId } = event.pathParameters!;
        const service = new UsersService();
        const user = await service.getUserById(userId!);
        return {
            statusCode: 200,
            body: JSON.stringify(user),
        };
    } catch (e) {
        console.error(e);
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'ERROR',
                error: e,
            }),
        };
    }
};
