import { CatRequestDto } from './../dto/cats.request.dto';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { CatsService } from './cats.service';
import {
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Delete,
  HttpException,
  UseFilters,
  Param,
  ParseIntPipe,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exception/http-exception.filter';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReadOnlyCatDto } from 'src/dto/cat.dto';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  @ApiOperation({ summary: '현재 고양이 가져오기' })
  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @ApiResponse({
    status: 500,
    description: 'Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: ReadOnlyCatDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    console.log(body);
    return await this.CatsService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn() {
    return 'login';
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut() {
    return 'logout';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}
