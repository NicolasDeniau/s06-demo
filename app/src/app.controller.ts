import { All, Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { UserCreateDto } from './dto/UserCreateDto';
import { UserUpdateDto } from './dto/UserUpdateDto';


// :3000/api = route
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // route = :3000/api/create
  @Post('create')
  post(@Body() body: UserCreateDto) {
    return {
      route: 'Route POST',
      user: body
    };
  }

  // même route pour les 3 = :3000/api, seul la méthode HTTP change 
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

  // acepte toutes les méthodes
  // all = décorator de nest qui prend n'importe quelle méthode mais pas une méthode en elle même 
  @All('all')
  all() {
    return 'Route ALL';
  }
}




    
   
