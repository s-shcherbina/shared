import { type UserWithImageRelation } from '../../../../packages/user/user.js';
import { type Comment } from './comment.type.js';
type CommentWithUserNestedRelations = Comment & Record<'user', UserWithImageRelation>;
export { type CommentWithUserNestedRelations };
//# sourceMappingURL=comment-with-user-nested-relations.type.d.ts.map