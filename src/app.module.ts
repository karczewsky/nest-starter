import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './infrastructure/health/health.module';

@Module({
  imports: [
    HealthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'webapp'),
      renderPath: '*', // due to frontend routing
      serveStaticOptions: {
        cacheControl: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
