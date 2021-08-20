import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.z1nkd.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`),
    TasksModule
  ],
  controllers: [AppController],
  providers  : [AppService],
})
export class AppModule {}
