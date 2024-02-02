import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//USER
import { User } from '../../entities/user.entity';
import { UserDto } from '@features/users/dto/user.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: UserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = new User();
    user.name = createUserDto.name;
    user.username = createUserDto.username;
    user.password = hashedPassword;

    return this.usersRepository.save(user);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }
}
