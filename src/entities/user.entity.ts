import { hashSync } from 'bcryptjs';
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;
    
    @Column({ unique: true })
    email: string;
    
    @Column()
    password: string;
    
    @Column()
    isAdm: boolean;
    
    @Column({ default: true })
    isActive: boolean;
    
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    } 
}

export default { User }