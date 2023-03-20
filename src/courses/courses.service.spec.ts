import { CreateCourseDto } from './dto/create-course.dto';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
    let service: CoursesService;
    let id: string;
    let date: Date;

    beforeEach(async () => {
        service = new CoursesService();
        id = 'ff078867-b826-4751-912c-adf5ea7d308d';
        date = new Date();
    });

    it('Should be defined', () => {
        expect(service).toBeDefined();
    });

    it('Should creates a course', async () => {
        const expectOutputTags = [
            {
                id,
                name: 'Javascript',
                created_at: date,
            },
        ];
        const expectOutputCourse = {
            id,
            name: ' Test',
            description: 'Test description',
            created_at: date,
            tags: expectOutputTags,
        };
        const mockTagRepository = {
            findOne: jest.fn(),
            create: jest
                .fn()
                .mockReturnValue(Promise.resolve(expectOutputTags)),
        };

        const mockCourseRepository = {
            create: jest
                .fn()
                .mockReturnValue(Promise.resolve(expectOutputCourse)),
            save: jest
                .fn()
                .mockReturnValue(Promise.resolve(expectOutputCourse)),
        };
        //@ts-expect-error defined part of methods
        service['courseRepository'] = mockCourseRepository;
        //@ts-expect-error defined part of methods
        service['tagRepository'] = mockTagRepository;
        const createCourseDto: CreateCourseDto = {
            name: 'Test',
            description: 'Test description',
            tags: ['nestjs'],
        };
        const newCourse = await service.create(createCourseDto);
        expect(mockCourseRepository.save).toHaveBeenCalled();
        expect(expectOutputCourse).toStrictEqual(newCourse);
    });
    it('Should list courses', async () => {
        const expectOutputTags = [
            {
                id,
                name: 'Javascript',
                created_at: date,
            },
        ];
        const expectOutputCourse = [
            {
                id,
                name: ' Test',
                description: 'Test description',
                created_at: date,
                tags: expectOutputTags,
            },
        ];
        const mockCourseRepository = {
            findAll: jest
                .fn()
                .mockReturnValue(Promise.resolve(expectOutputCourse)),
            find: jest
                .fn()
                .mockReturnValue(Promise.resolve(expectOutputCourse)),
        };
        //@ts-expect-error defined part of methods
        service['courseRepository'] = mockCourseRepository;

        const courses = await service.findAll();
        expect(mockCourseRepository.find).toHaveBeenCalled();
        expect(expectOutputCourse).toStrictEqual(courses);
    });
    it('Should get a course', async () => {
        const expectOutputTags = [
            {
                id,
                name: 'Javascript',
                created_at: date,
            },
        ];
        const expectOutputCourse = [
            {
                id,
                name: ' Test',
                description: 'Test description',
                created_at: date,
                tags: expectOutputTags,
            },
        ];
        const mockCourseRepository = {
            findOne: jest
                .fn()
                .mockReturnValue(Promise.resolve(expectOutputCourse)),
        };
        //@ts-expect-error defined part of methods
        service['courseRepository'] = mockCourseRepository;

        const course = await service.findOne(id);
        expect(mockCourseRepository.findOne).toHaveBeenCalled();
        expect(expectOutputCourse).toStrictEqual(course);
    });
});
