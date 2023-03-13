import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

const configService = new ConfigService();

export const databaseProviders = [
	{
		provide: 'DATA_SOURCE',
		useFactory: async () => {
			const dataSource = new DataSource({
				type: 'postgres',
				host: configService.get('DB_HOST', 'localhost'),
				port: configService.get('DB_PORT', 5432),
				username: configService.get('DB_USER', 'postgres'),
				password: configService.get('DB_PASSWORD', 'postgres'),
				database: configService.get('DB_DATABASE', 'devtraining'),
				entities: [__dirname + '/../**/*.entity.js'],
				migrations: ['dist/migrations/*.js'],
				// synchronize: true,
			});
			return dataSource.initialize();
		},
	},
];

export const dataSource = new DataSource({
	type: 'postgres',
	host: configService.get('DB_HOST', 'localhost'),
	port: configService.get('DB_PORT', 5432),
	username: configService.get('DB_USER', 'postgres'),
	password: configService.get('DB_PASSWORD', 'postgres'),
	database: configService.get('DB_DATABASE', 'devtraining'),
	entities: [__dirname + '/../**/*.entity.js'],
	migrations: [],
	// synchronize: true,
});
