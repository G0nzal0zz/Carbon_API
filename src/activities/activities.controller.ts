import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { IdFromJwt } from 'src/middleware/middleware.id';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(@IdFromJwt() id: number , @Body() createActivityDto: CreateActivityDto) {
    return this.activitiesService.create(id ,createActivityDto);
  }

  @Get()
  async findAll() {
    return await this.activitiesService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    return await this.activitiesService.findOne(name);
  }

  @Patch(':name')
  async update(@Param('name') name: string, @Body() updateActivityDto: UpdateActivityDto) {
    return await this.activitiesService.update(name, updateActivityDto);
  }

  @Delete(':name')
  async remove(@Param('name') name: string) {
    return await this.activitiesService.remove(name);
  }
}
