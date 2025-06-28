import { Book } from "src/modules/books/entities/book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users", schema: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    first_name!: string;

    @Column({ length: 255 })
    last_name!: string;

    @Column({ length: 255 })
    mobile_number!: string;

    @Column({ length: 255 })
    address!: string;

    @OneToMany(() => Book, book => book.user)
    books: Book[];
}
