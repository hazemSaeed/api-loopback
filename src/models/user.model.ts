import {Entity, model, property, hasMany} from '@loopback/repository';
import {Post, PostWithRelations} from './post.model';
import {Comment} from './comment.model';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'date',
  })
  create_at?: string;

  @property({
    type: 'date',
  })
  updated_at?: string;

  @hasMany(() => Post)
  posts: Post[];

  @hasMany(() => Comment)
  comments: Comment[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  posts: PostWithRelations[];
}

export type UserWithRelations = User & UserRelations;
