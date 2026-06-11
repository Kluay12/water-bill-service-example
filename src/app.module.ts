import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './controller/admin/admin.controller';
import { AdminService } from './service/admin.service';

@Module({
  imports: [],
  controllers: [AppController, AdminController],
  providers: [AppService, AdminService],
})
export class AppModule {}
