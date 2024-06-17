import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
    @Get('/')
    find(): string {
        return "Hello"
    }
}
