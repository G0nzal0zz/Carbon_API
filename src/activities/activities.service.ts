import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from 'src/database/models/activity.model';
import { Type } from 'src/database/models/type.model';

@Injectable()
export class ActivitiesService {

  async create(id: number, createActivityDto: CreateActivityDto) {
    return Activity.create({
      name: createActivityDto.name,
      description: createActivityDto.description,
      type_id: createActivityDto.type_id,
      emissions: createActivityDto.emission,
      user_id: id,
    })
  }

  async findAll() {
    return Activity.findAll({
      include: [
        {
          model: Type,
          attributes: ["name"],
        }
      ],
      raw: true,
      attributes: ["name", "description", "emissions"],
    })
  }

  async findOne(name: string) {
    return Activity.findOne({
      where: {
        name: {
          $eq: name,
        },
      },
      include: [{
        model: Type,
        attributes: ["name"],
      }
      ],
      raw: true,
      attributes: ["name", "description", "emissions"],
    })
  }

  async update(name: string, updateActivityDto: UpdateActivityDto) {
    return Activity.update({
      ...updateActivityDto,
    },
      {
        where: {
          name: {
            $eq: name,
          },
        }
      }
    );
  }

  async remove(name: string) {
    return Activity.destroy({
      where: {
        name: {
          $eq: name,
        },
      }
    });
  }
}
