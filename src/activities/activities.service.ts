import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from 'src/database/models/activity.model';
import { Type } from 'src/database/models/type.model';

@Injectable()
export class ActivitiesService {
  async create(id: number, createActivityDto: CreateActivityDto) {
    const type = await Type.findByPk(createActivityDto.type_id);

    const randomIntFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const choosenEmission = randomIntFromInterval(
      type.dataValues['min_emission'],
      type.dataValues['max_emission'],
    );

    return Activity.create({
      name: createActivityDto.name,
      description: createActivityDto.description,
      type_id: createActivityDto.type_id,
      user_id: id,
      emission: choosenEmission,
    });
  }

  async findAll(user_id: number) {
    return Activity.findAll({
      where: { user_id: { $eq: user_id } },
      include: [
        {
          model: Type,
          attributes: ['name'],
        },
      ],
      raw: true,
      attributes: ['name', 'description', 'emission'],
    }).then((res) => {
      res['type'] = res['type.name'];
      delete res['type.name'];
      return res;
    });
  }

  async findOne(user_id: number, name: string) {
    return Activity.findOne({
      where: {
        name: {
          $eq: name,
        },
        user_id: {
          $eq: user_id,
        },
      },
      include: [
        {
          model: Type,
          attributes: ['name'],
        },
      ],
      raw: true,
      attributes: ['name', 'description', 'emission'],
    }).then((res) => {
      res['type'] = res['type.name'];
      delete res['type.name'];
      return res;
    });
  }

  async update(name: string, updateActivityDto: UpdateActivityDto) {
    return Activity.update(
      {
        ...updateActivityDto,
      },
      {
        where: {
          name: {
            $eq: name,
          },
        },
      },
    ).then((res) => {
      res['type'] = res['type.name'];
      delete res['type.name'];
      return res;
    });
  }

  async remove(name: string) {
    return Activity.destroy({
      where: {
        name: {
          $eq: name,
        },
      },
    }).then(() => ({}));
  }
}
