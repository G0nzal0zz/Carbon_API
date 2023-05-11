import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dto/register.dto';
import { AuthLoginDto } from './dto/login.dto';
import { validate } from 'class-validator';
import * as argon from 'argon2';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: AuthRegisterDto) {
    const errors = await validate(registerDto);
    if (errors.length > 0) {
      return errors;
    }
    const user = await this.authService.findUserByEmail(registerDto.email);
    if (user) {
      return new BadRequestException('Incorrect email or password');
    }
    return await this.authService.createUser(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: AuthLoginDto) {
    const errors = await validate(loginDto);
    if (errors.length > 0) {
      return errors;
    }
    const user = await this.authService.findUserByEmail(loginDto.email);
    if (!user) {
      return new BadRequestException('Incorrect email or password');
    }
    const pwdExists = await argon.verify(user['password'], loginDto.password);
    if (!pwdExists) {
      throw new BadRequestException('Incorrect email or password');
    }
    return await this.authService.signToken(user['id'], loginDto.email);
  }
}
