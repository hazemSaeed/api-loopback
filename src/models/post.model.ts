import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {User, UserRelations} from './user.model';
import {Comment, CommentWithRelations} from './comment.model';

@model()
export class Post extends Entity {
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
  content: string;

  @property({
    type: 'date'
  })
  created_at: string;

  @property({
    type: 'date',
  })
  updated_at?: string;

  @belongsTo(() => User)
  userId: number;

  @hasMany(() => Comment)
  comments: Comment[];

  constructor(data?: Partial<Post>) {
    super(data);
  }
}

export interface PostRelations {
  user?:UserRelations;
  comments?:CommentWithRelations[];
}

export type PostWithRelations = Post & PostRelations;
