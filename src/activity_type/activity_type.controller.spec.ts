import { Test, TestingModule } from '@nestjs/testing';
import { ActivityTypeController } from './activity_type.controller';
import { ActivityTypeService } from './activity_type.service';

describe('ActivityTypeController', () => {
  let controller: ActivityTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityTypeController],
      providers: [ActivityTypeService],
    }).compile();

    controller = module.get<ActivityTypeController>(ActivityTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
