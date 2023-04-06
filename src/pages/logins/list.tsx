import { IResourceComponentsProps, GetListResponse } from '@refinedev/core';
import { MuiInferencer } from '@refinedev/inferencer/mui';

export const LoginList: React.FC<IResourceComponentsProps<GetListResponse<{}>>> = () => <MuiInferencer />;
