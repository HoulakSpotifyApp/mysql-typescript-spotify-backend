import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    id_spotify!: string;
    @Column()
    nombre_artista!: string;
    @CreateDateColumn()
    fecha_busqueda?: Date;
  }