import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }

    getNome(): string {
        return 'Meu nome é Gustavo';
    }
}
