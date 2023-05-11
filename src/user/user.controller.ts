import { Controller, Get, Delete, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { IdFromJwt } from 'src/middleware/middleware.id';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me/activities')
  findAllUserActivities(@IdFromJwt() id: number, @Query() query) {
    console.log(id, query);
    return {};
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  findOne(@IdFromJwt() id: number) {
    return this.userService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('me')
  remove(@IdFromJwt() id: number) {
    return this.userService.remove(id);
  }
}
