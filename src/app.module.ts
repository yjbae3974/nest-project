import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UserProfilesModule } from './userprofiles/userprofile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestuser',
      password: 'nestpassword',
      database: 'nestdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // 개발 환경에서만 true로 설정하여 테이블 자동 생성 위험한 옵션이긴 함. 실제 서비스에서는 false로 설정
    }),
    BoardsModule,
    UsersModule,
    AuthModule,
    UserProfilesModule,
  ],
})
export class AppModule {}
