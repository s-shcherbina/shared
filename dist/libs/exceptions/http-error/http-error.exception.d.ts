import { type ValueOf } from '../../../libs/types/types.js';
import { HttpCode } from '../../packages/http/http.js';
type Constructor = {
    status: ValueOf<typeof HttpCode>;
    message: string;
};
declare class HttpError extends Error {
    status: ValueOf<typeof HttpCode>;
    constructor({ status, message }?: Partial<Constructor>);
}
export { HttpError };
//# sourceMappingURL=http-error.exception.d.ts.map