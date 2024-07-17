import { All, Body, Controller, Delete, Get, Header, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { UserCreateDto } from './dto/UserCreateDto';
import { UserUpdateDto } from './dto/UserUpdateDto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('crud')
@Controller('crud')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create')
  post(@Body() body: UserCreateDto) {
    return {
      route: 'Route POST',
      user: body
    };
  }

  @Put(':id')
  put(@Param('id') id: string) {
    return 'Route PUT ' + id;
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() body: UserUpdateDto) {
    return {
      route: 'Route PATCH ' + id,
      user: body
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return 'Route DELETE ' + id;
  }

  @All('all')
  all() {
    return 'Route ALL';
  }
}
