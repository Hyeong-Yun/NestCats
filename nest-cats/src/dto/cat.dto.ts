import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from 'src/cats/cats.scheme';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: 'guddbs5545@naver.com',
    description: 'email',
    required: true,
  })
  id: string;
}
