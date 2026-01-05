export interface RoleDefinition {
  name: string;           // например: "admin"
  permissions: string[];  // ["read_users", "edit_roles"]
}

// Заглушка: можно динамически расширять
const MOCK_ROLES: RoleDefinition[] = [
  { name: 'admin', permissions: ['read_users', 'edit_roles', 'delete_data'] },
  { name: 'manager', permissions: ['read_users', 'edit_data'] },
  { name: 'user', permissions: ['read_data'] },
];

export const rolesApi = {
  async getRoles(): Promise<RoleDefinition[]> {
    await new Promise((r) => setTimeout(r, 300)); // имитация сети
    return MOCK_ROLES;
  },
};
