import { Injectable } from '@nestjs/common';
import { CreateActivityTypeDto } from './dto/create-activity_type.dto';
import { UpdateActivityTypeDto } from './dto/update-activity_type.dto';
import { Type } from 'src/database/models/type.model';
// CREATE TABLE Activity_Type (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(255) NOT NULL
// );

@Injectable()
export class ActivityTypeService {
  async create(createActivityTypeDto: CreateActivityTypeDto) {
    return Type.create ({
      id: createActivityTypeDto.id,
      name: createActivityTypeDto.name,
    });
  }

  findAll() {
    return `This action returns all activityType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activityType`;
  }

  update(id: number, updateActivityTypeDto: UpdateActivityTypeDto) {
    return `This action updates a #${id} activityType`;
  }

  remove(id: number) {
    return `This action removes a #${id} activityType`;
  }
}
