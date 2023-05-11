import { Controller, Get, Delete, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { IdFromJwt } from 'src/middleware/middleware.id';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me/activities')
  async findAllUserActivities(@IdFromJwt() id: number, @Query() query) {
    return await this.userService.findUserAndActivity(
      id,
      query['startsAt'],
      query['expiresAt'],
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  findOne(@IdFromJwt() id: number) {
    return this.userService.findUser(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('me')
  remove(@IdFromJwt() id: number) {
    return this.userService.remove(id);
  }
}
