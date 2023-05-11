import { Injectable } from '@nestjs/common';
import { AuthRegisterDto } from './dto/register.dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/database/models/user.model';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async findUserByEmail(email: string): Promise<object | null> {
    return User.findOne({
      where: {
        email: { $eq: email },
      },
    });
  }

  async createUser(registerDto: AuthRegisterDto) {
    const hashedPassword = await argon.hash(registerDto.password);
    return User.create({
      ...registerDto,
      password: hashedPassword,
      raw: true,
    }).then((user) => this.signToken(user['id'], user['email']));
  }

  async signToken(userId: number, email: string) {
    const payload = {
      sub: userId,
      email,
    };
    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '1h',
        secret: process.env.JWT_SECRET,
      }),
    };
  }
}
