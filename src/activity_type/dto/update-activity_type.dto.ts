import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityTypeDto } from './create-activity_type.dto';

export class UpdateActivityTypeDto extends PartialType(CreateActivityTypeDto) {}
