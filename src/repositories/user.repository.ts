import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {User, UserRelations, Post, Comment} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {PostRepository} from './post.repository';
import {CommentRepository} from './comment.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly posts: HasManyRepositoryFactory<Post, typeof User.prototype.id>;

  public readonly comments: HasManyRepositoryFactory<Comment, typeof User.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PostRepository') protected postRepositoryGetter: Getter<PostRepository>, @repository.getter('CommentRepository') protected commentRepositoryGetter: Getter<CommentRepository>,
  ) {
    super(User, dataSource);
    this.comments = this.createHasManyRepositoryFactoryFor('comments', commentRepositoryGetter,);
    this.registerInclusionResolver('comments', this.comments.inclusionResolver);
    this.posts = this.createHasManyRepositoryFactoryFor('posts', postRepositoryGetter,);
    this.registerInclusionResolver('posts', this.posts.inclusionResolver);
  }
}
