import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'deepak',
    database: 'product-data',
    entities: [Product],
    synchronize: true,//false 
    // "logging":true,
    // "entities":["src//*.entity.ts","dist//*entity.ts"]
  }),
    ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
