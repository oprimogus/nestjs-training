import { CoursesService } from './courses.service';
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
	constructor(private readonly CoursesService: CoursesService) {}

	@Get()
	findAll() {
		return this.CoursesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.CoursesService.findOne(id);
	}

	@Post()
	create(@Body() createCourseDto: CreateCourseDto) {
		return this.CoursesService.create(createCourseDto);
	}

	@Patch(':id')
	update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto) {
		return this.CoursesService.update(id, updateCourseDto);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.CoursesService.remove(id);
	}
}
