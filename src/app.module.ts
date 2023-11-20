import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleController } from './example/example.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';




@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://dubeyanurag0711:pCZHCDQrtvquFJtS@cluster0.pvei9jr.mongodb.net/?retryWrites=true&w=majority'), AuthModule],
  controllers: [AppController, ExampleController],
  providers: [AppService],
})
export class AppModule {}
