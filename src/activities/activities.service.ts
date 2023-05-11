import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from 'src/database/models/activity.model';
import { IdFromJwt } from 'src/middleware/middleware.id';

@Injectable()
export class ActivitiesService {

  async create(id: number ,createActivityDto: CreateActivityDto) {
    const activity = await Activity.create({
      name: createActivityDto.name,
      description: createActivityDto.description,
      type_id: createActivityDto.type_id,
      emissions: createActivityDto.emission,
      user_id: id,
    })
  }

  // findAll() {
  //   return `This action returns all activities`;
  // }

  findOne(id: number) {
    return {where: {
      id: id,
    },
    raw: true,
  }}

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
