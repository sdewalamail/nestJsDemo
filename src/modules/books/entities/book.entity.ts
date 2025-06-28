import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "books", schema: "books" })
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    book_name: string;

    @ManyToOne(() => User, user => user.books)
    @JoinColumn({ name: 'user_id' })
    user: User;
}
