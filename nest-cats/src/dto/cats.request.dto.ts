import { Cat } from './../cats/cats.scheme';
import { ApiProperty, PickType } from '@nestjs/swagger';

export class CatRequestDto extends PickType(Cat, [
  'email',
  'name',
  'password',
] as const) {}
