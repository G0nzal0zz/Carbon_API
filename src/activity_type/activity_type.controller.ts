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
import { ActivityTypeService } from './activity_type.service';
import { CreateActivityTypeDto } from './dto/create-activity_type.dto';
import { UpdateActivityTypeDto } from './dto/update-activity_type.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('activity-type')
export class ActivityTypeController {
  constructor(private readonly activityTypeService: ActivityTypeService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createActivityTypeDto: CreateActivityTypeDto) {
    return await this.activityTypeService.create(createActivityTypeDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll() {
    return await this.activityTypeService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':name')
  async findOne(@Param('name') name: string) {
    const decodedName = decodeURI(name);
    return await this.activityTypeService.findOne(decodedName);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':name')
  async update(
    @Param('name') name: string,
    @Body() updateActivityTypeDto: UpdateActivityTypeDto,
  ) {
    const decodedName = decodeURI(name);
    return await this.activityTypeService.update(
      decodedName,
      updateActivityTypeDto,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':name')
  async remove(@Param('name') name: string) {
    const decodedName = decodeURI(name);
    return await this.activityTypeService.remove(decodedName);
  }
}
