import { Controller, Get, Post, Delete, Patch, Put, All } from '@nestjs/common';
import { AppService } from './app.service';


// :3000/foo = route
@Controller('foo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // route = :3000/api/create
  @Post('/create')
  post() {
    return 'Route POST';
  }

  // même route pour les 3 = :3000/api, seul la méthode HTTP change 
  @Put()
  put() {
    return 'Route PUT';
  }

  @Patch()
  patch() {
    return 'Route PATCH';
  }

  @Delete()
  delete() {
    return 'Route DELETE';
  }

  // acepte toutes les méthodes
  // all = décorator de nest qui prend n'importe quelle méthode mais pas une méthode en elle même 
  @All('all')
  all() {
    return 'Route ALL';
  }
}




    
   
