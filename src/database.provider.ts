import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { CreateCourses1678718931567 } from './database/migrations/1678718931567-CreateCourses';
import { CreateTags1678733552394 } from './database/migrations/1678733552394-CreateTags';
import { AddTagsIdToCursesTagsTable1678764100090 } from './database/migrations/1678764100090-AddTagsIdToCursesTagsTable';
import { AddCoursesIdToCursesTagsTable1678763699691 } from './database/migrations/1678763699691-AddCoursesIdToCursesTagsTable';
import { CoursesTags1678763431549 } from './database/migrations/1678763431549-Courses_tags';
// eslint-disable-next-line @typescript-eslint/no-var-requires

const configService: ConfigService = new ConfigService();

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
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
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + '/../**/*.entity.js'],
    migrations: [
        CreateCourses1678718931567,
        CreateTags1678733552394,
        CoursesTags1678763431549,
        AddCoursesIdToCursesTagsTable1678763699691,
        AddTagsIdToCursesTagsTable1678764100090,
    ],
    // synchronize: true,
});
console.log(process.env.DB_PORT);
