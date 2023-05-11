import { Module } from '@nestjs/common';
import { ActivityTypeService } from './activity_type.service';
import { ActivityTypeController } from './activity_type.controller';

@Module({
  controllers: [ActivityTypeController],
  providers: [ActivityTypeService]
})
export class ActivityTypeModule {}
