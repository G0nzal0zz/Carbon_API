import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivityTypeService } from './activity_type.service';
import { CreateActivityTypeDto } from './dto/create-activity_type.dto';
import { UpdateActivityTypeDto } from './dto/update-activity_type.dto';

@Controller('activity-type')
export class ActivityTypeController {
  constructor(private readonly activityTypeService: ActivityTypeService) {}

  @Post()
  async create(@Body() createActivityTypeDto: CreateActivityTypeDto) {
    return await await this.activityTypeService.create(createActivityTypeDto);
  }

  @Get()
  async findAll() {
    return await this.activityTypeService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    return await this.activityTypeService.findOne(name);
  }

  @Patch(':name')
  async update(@Param('name') name: string, @Body() updateActivityTypeDto: UpdateActivityTypeDto) {
    return await this.activityTypeService.update(name, updateActivityTypeDto);
  }

  @Delete(':name')
  async remove(@Param('name') name: string) {
    return await this.activityTypeService.remove(name);
  }
}
