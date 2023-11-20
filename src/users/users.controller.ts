import { Body, Controller, Get, Post,Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/cat.schema';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    getUsers(): string{
        return 'This action returns all users'
    }
    @Post()
  async createUser(
    @Body()
    user: any,
  ): Promise<{token:String}> {
    return this.userService.signUp(user);
  }
  @Post('login')
  async loginUser(
    @Body()
    user: any,
  ): Promise<{token:String}> {
    return this.userService.login(user);
  }
  @Post('add')
  async addtask(
    @Body()
    task:any,
    @Req() req,
  ):Promise<string[]>{
    return this.userService.addTask(task, req);
  }
}
