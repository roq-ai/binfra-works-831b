interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Project Manager', 'Financial Analyst'],
  tenantName: 'Company',
  applicationName: 'BINFRA Works',
  addOns: ['notifications', 'chat', 'file'],
};
