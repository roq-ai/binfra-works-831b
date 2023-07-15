const mapping: Record<string, string> = {
  companies: 'company',
  financials: 'financial',
  projects: 'project',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
