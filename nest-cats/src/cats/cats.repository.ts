import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.scheme';

@Injectable()
export class CatRepository {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}
}
