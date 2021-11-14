/* tslint:disable */
/* eslint-disable */
/**
 * Crayon Group Customer API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  OrganizationAccess,
  OrganizationAccessFromJSON,
  OrganizationAccessToJSON,
} from '../models';

export interface GrantOrganizationAccessRequest {
  userId?: string | null;
  organizationId?: number;
  page?: number;
  pageSize?: number;
}

export interface ListOrganizationAccessRequest {
  userId?: string | null;
  organizationId?: number;
  page?: number;
  pageSize?: number;
}

export interface UpdateOrganizationAccessRequest {
  organizationAccess?: Array<OrganizationAccess> | null;
}

/**
 *
 */
export class OrganizationAccessApi extends runtime.BaseAPI {
  /**
   */
  async grantOrganizationAccessRaw(
    requestParameters: GrantOrganizationAccessRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<OrganizationAccess>>> {
    const queryParameters: any = {};

    if (requestParameters.userId !== undefined) {
      queryParameters['userId'] = requestParameters.userId;
    }

    if (requestParameters.organizationId !== undefined) {
      queryParameters['organizationId'] = requestParameters.organizationId;
    }

    if (requestParameters.page !== undefined) {
      queryParameters['page'] = requestParameters.page;
    }

    if (requestParameters.pageSize !== undefined) {
      queryParameters['pageSize'] = requestParameters.pageSize;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('BearerAuth', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/OrganizationAccess/grant`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(OrganizationAccessFromJSON),
    );
  }

  /**
   */
  async grantOrganizationAccess(
    requestParameters: GrantOrganizationAccessRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<OrganizationAccess>> {
    const response = await this.grantOrganizationAccessRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async listOrganizationAccessRaw(
    requestParameters: ListOrganizationAccessRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<OrganizationAccess>>> {
    const queryParameters: any = {};

    if (requestParameters.userId !== undefined) {
      queryParameters['userId'] = requestParameters.userId;
    }

    if (requestParameters.organizationId !== undefined) {
      queryParameters['organizationId'] = requestParameters.organizationId;
    }

    if (requestParameters.page !== undefined) {
      queryParameters['page'] = requestParameters.page;
    }

    if (requestParameters.pageSize !== undefined) {
      queryParameters['pageSize'] = requestParameters.pageSize;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('BearerAuth', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/OrganizationAccess`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(OrganizationAccessFromJSON),
    );
  }

  /**
   */
  async listOrganizationAccess(
    requestParameters: ListOrganizationAccessRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<OrganizationAccess>> {
    const response = await this.listOrganizationAccessRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async updateOrganizationAccessRaw(
    requestParameters: UpdateOrganizationAccessRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<OrganizationAccess>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json-patch+json';

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('BearerAuth', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/OrganizationAccess`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.organizationAccess.map(
          OrganizationAccessToJSON,
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(OrganizationAccessFromJSON),
    );
  }

  /**
   */
  async updateOrganizationAccess(
    requestParameters: UpdateOrganizationAccessRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<OrganizationAccess>> {
    const response = await this.updateOrganizationAccessRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
