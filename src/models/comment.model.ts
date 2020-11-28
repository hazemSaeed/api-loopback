import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Post, PostWithRelations} from './post.model';
import {User, UserRelations} from './user.model';

@model()
export class Comment extends Entity {
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
  text: string;

  @property({
    type: 'date',
  })
  created_at?: string;

  @property({
    type: 'date',
  })
  updated_at?: string;

  @belongsTo(() => Post)
  postId: number;

  @belongsTo(() => User)
  userId: number;

  constructor(data?: Partial<Comment>) {
    super(data);
  }
}

export interface CommentRelations {
  user?: UserRelations;
  post?: PostWithRelations;
}

export type CommentWithRelations = Comment & CommentRelations;
