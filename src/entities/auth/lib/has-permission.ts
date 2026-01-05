import { Role } from '../model/types';
import { RoleDefinition } from '@/shared/api/roles.api';
import { User } from '../model/types';

export const hasPermission = (
  user: User,
  permission: string,
  availableRoles: RoleDefinition[]
) => {
  const roleDef = availableRoles.find(r => r.name === user.role);
  return roleDef?.permissions.includes(permission) ?? false;
};