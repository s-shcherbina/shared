import { type CommentWithUserNestedRelations } from '../../../../packages/comment/comment.js';
import { type PostWithImageUserNestedRelationsWithCount } from './post-with-image-user-nested-relations-with-count.type.js';
type PostWithCommentImageUserNestedRelationsWithCount = PostWithImageUserNestedRelationsWithCount & Record<'comments', CommentWithUserNestedRelations[]>;
export { type PostWithCommentImageUserNestedRelationsWithCount };
//# sourceMappingURL=post-with-comment-image-user-nested-relations-with-count.type.d.ts.map