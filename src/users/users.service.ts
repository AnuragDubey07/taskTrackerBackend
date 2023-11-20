import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/cat.schema';





// This should be a real class/interface representing a user entity
//export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) 
  private userModel: Model<User>,
  private jwtService: JwtService,) {}
  private readonly users = [
    {
      userId: 1,
      username: 'anurag',
      password: '12345',
    },
    {
      userId: 2,
      username: 'ayush',
      password: 'qwerty',
    },
  ];

  async create(user: User): Promise<User> {
    const res = await this.userModel.create(user);
    return res;
  }
  async login(user: User): Promise<{ token: String[] }> {
    const { email, password } = user;
    //console.log(email, password)
    const userData = await this.userModel.findOne({ email });
    //console.log(userData)
    if (!userData) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, userData.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: userData._id });

    return { token };
  }

  async signUp(user: User): Promise<{ token: string }> {
    const { name, email, password } = user;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: userData._id });

    return { token };
    
  }
  // async addTask(user: String): Promise<{ task: string[] }> {
  //   //return [  ][]
  async addTask(data:any,user: any):Promise<{task:string[]}>{
    const { task } = data;
    // const userData = await this.userModel.findOneAndUpdate({
    //   _id: user._id,
    // })
    console.log(user)
    return "dmsad,ms"
  }
  }
//}