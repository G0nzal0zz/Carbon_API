import { Injectable } from '@nestjs/common';
import { Activity } from 'src/database/models/activity.model';
import { User } from 'src/database/models/user.model';

@Injectable()
export class UserService {
  findUserAndActivity(user_id: number, startsAt?, endsAt?) {
    const whereQuery = { user_id: { $eq: user_id } };
    if (startsAt) {
      whereQuery['created_at'] = { $gte: startsAt };
    }

    if (endsAt) {
      whereQuery['created_at'] = { $lte: endsAt };
    }

    return User.findByPk(user_id, {
      include: [
        {
          model: Activity,
          where: whereQuery,
        },
      ],
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findUser(id: number) {
    return User.findByPk(id);
  }

  remove(id: number) {
    return User.destroy({
      where: { id: { $eq: id } },
    });
  }
}
