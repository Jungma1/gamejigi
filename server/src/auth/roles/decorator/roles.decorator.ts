import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'ROLES';
export const ROLE_ADMIN = 'ADMIN';
export const ROLE_MEMBER = 'MEMBER';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
