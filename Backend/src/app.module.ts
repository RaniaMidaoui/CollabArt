import { CacheModule, Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { CaslModule } from './authorization/casl.module';
import { SubjectModule } from './subject/subject.module';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { ModuleModule } from './module/module.module';
import { ContentModule } from './content/content.module';
import { EnrollmentModuleModule } from './enrollment-module/enrollment-module.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    // for chaching
    CacheModule.register(),
    // configuration for .env
    ConfigModule.forRoot({
      isGlobal: true,
    }),
     TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
        host: "dumbo.db.elephantsql.com",
        port: 5432,
        username: "akuqbhkm",
        password: "dVzxGR394F-VAZAyzWP7t5FiKRnLvXcE",
        database: "akuqbhkm",
        entities: ["dist/**/*.entity{.ts,.js}"],
        cache: true,
      }),
    }),
    UserModule,
    AuthModule,
    MailModule,
    CaslModule,
    SubjectModule,
    CourseModule,
    EnrollmentModule,
    ModuleModule,
    ContentModule,
    EnrollmentModuleModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    },
  ],
})
export class AppModule {}
