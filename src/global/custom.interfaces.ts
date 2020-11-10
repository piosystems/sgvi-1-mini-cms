import { FastifyReply, FastifyRequest } from 'fastify';
import { Tenant } from 'src/tenants/models/tenant.entity';
import { User } from 'src/users/models/user.entity';

export interface Reply extends FastifyReply{
  view(page: string, data?: object): FastifyReply
}

export interface Request extends FastifyRequest{
  user: User; //we need this for request object to contain our authenticated user
}

export type TenantsWithCount = {
  tenants: Tenant[],
  count?: number
}

export enum Gender {
  M = "male",
  F = "female"
}

export enum TenantStatus {
  A = "active",
  S = "suspended",
  O = "owing"
}