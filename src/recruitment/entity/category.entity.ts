import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category{
    @PrimaryGeneratedColumn({name:'category_id'})
    categoryId : number;

    @Column({name:'name'})
    name:string;
}