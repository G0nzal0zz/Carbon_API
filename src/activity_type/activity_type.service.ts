import { Injectable } from '@nestjs/common';
import { CreateActivityTypeDto } from './dto/create-activity_type.dto';
import { UpdateActivityTypeDto } from './dto/update-activity_type.dto';
import { Type } from 'src/database/models/type.model';

@Injectable()
export class ActivityTypeService {
  async create(createActivityTypeDto: CreateActivityTypeDto) {
    return Type.create({
      name: createActivityTypeDto.name,
      min_emission: createActivityTypeDto.min_emission,
      max_emission: createActivityTypeDto.max_emission,
    }).then((type) => delete type.dataValues.type_id);
  }

  async findAll() {
    return Type.findAll({
      raw: true,
      attributes: ['id', 'name', 'min_emission', 'max_emission'],
    });
  }

  async findOne(name: string) {
    return Type.findOne({
      where: {
        name: {
          $eq: name,
        },
      },
    });
  }

  async update(name: string, updateActivityTypeDto: UpdateActivityTypeDto) {
    return Type.update(
      {
        ...updateActivityTypeDto,
      },
      {
        where: {
          name: {
            $eq: name,
          },
        },
      },
    );
  }

  async remove(name: string) {
    return Type.destroy({
      where: {
        name: {
          $eq: name,
        },
      },
    }).then(() => ({}));
  }
}
