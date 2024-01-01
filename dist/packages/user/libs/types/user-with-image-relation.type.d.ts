import { type Image } from '../../../../packages/image/image.js';
import { type User } from './user.type.js';
type UserWithImageRelation = User & {
    image: Image | null;
};
export { type UserWithImageRelation };
//# sourceMappingURL=user-with-image-relation.type.d.ts.map