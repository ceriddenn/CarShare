import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ScheduleModule } from '@nestjs/schedule';
import { HelloModule } from './modules/hello/hello.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),

    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
      port: 8001,
    }),
    ScheduleModule.forRoot(),
    HelloModule,
  ],
  providers: [],
})
export class AppModule {}
