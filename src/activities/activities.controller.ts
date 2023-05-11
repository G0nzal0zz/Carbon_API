import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { IdFromJwt } from 'src/middleware/middleware.id';
import { AuthGuard } from '@nestjs/passport';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @IdFromJwt() id: number,
    @Body() createActivityDto: CreateActivityDto,
  ) {
    return await this.activitiesService.create(id, createActivityDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@IdFromJwt() id: number) {
    return await this.activitiesService.findAll(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':name')
  async findOne(@IdFromJwt() id: number, @Param('name') name: string) {
    return await this.activitiesService.findOne(id, name);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':name')
  async update(
    @Param('name') name: string,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    return await this.activitiesService.update(name, updateActivityDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':name')
  async remove(@Param('name') name: string) {
    return await this.activitiesService.remove(name);
  }
}
