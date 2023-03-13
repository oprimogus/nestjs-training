import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	async getHello(): Promise<string> {
		const advice = await fetch('https://api.adviceslip.com/advice', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.catch((error) => console.error(error));
		return advice.slip.advice;
	}

	@Get('oi')
	getNome(): string {
		return this.appService.getNome();
	}
}
