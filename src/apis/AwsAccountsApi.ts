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
  AwsAccount,
  AwsAccountFromJSON,
  AwsAccountToJSON,
  CustomerTenantType,
  CustomerTenantTypeFromJSON,
  CustomerTenantTypeToJSON,
} from '../models';

export interface GetAwsAccountRequest {
  id: number;
}

export interface ListAwsAccountsRequest {
  organizationId?: number;
  publisherId?: number;
  consumerId?: number;
  customerTenantType?: CustomerTenantType;
  page?: number;
  pageSize?: number;
  search?: string | null;
}

export interface UpdateAwsAccountRequest {
  id: number;
  awsAccount?: AwsAccount;
}

/**
 *
 */
export class AwsAccountsApi extends runtime.BaseAPI {
  /**
   */
  async getAwsAccountRaw(
    requestParameters: GetAwsAccountRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<AwsAccount>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getAwsAccount.',
      );
    }

    const queryParameters: any = {};

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
        path: `/AwsAccounts/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      AwsAccountFromJSON(jsonValue),
    );
  }

  /**
   */
  async getAwsAccount(
    requestParameters: GetAwsAccountRequest,
    initOverrides?: RequestInit,
  ): Promise<AwsAccount> {
    const response = await this.getAwsAccountRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async listAwsAccountsRaw(
    requestParameters: ListAwsAccountsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<AwsAccount>>> {
    const queryParameters: any = {};

    if (requestParameters.organizationId !== undefined) {
      queryParameters['OrganizationId'] = requestParameters.organizationId;
    }

    if (requestParameters.publisherId !== undefined) {
      queryParameters['PublisherId'] = requestParameters.publisherId;
    }

    if (requestParameters.consumerId !== undefined) {
      queryParameters['ConsumerId'] = requestParameters.consumerId;
    }

    if (requestParameters.customerTenantType !== undefined) {
      queryParameters['CustomerTenantType'] =
        requestParameters.customerTenantType;
    }

    if (requestParameters.page !== undefined) {
      queryParameters['Page'] = requestParameters.page;
    }

    if (requestParameters.pageSize !== undefined) {
      queryParameters['PageSize'] = requestParameters.pageSize;
    }

    if (requestParameters.search !== undefined) {
      queryParameters['Search'] = requestParameters.search;
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
        path: `/AwsAccounts`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(AwsAccountFromJSON),
    );
  }

  /**
   */
  async listAwsAccounts(
    requestParameters: ListAwsAccountsRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<AwsAccount>> {
    const response = await this.listAwsAccountsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async updateAwsAccountRaw(
    requestParameters: UpdateAwsAccountRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<AwsAccount>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling updateAwsAccount.',
      );
    }

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
        path: `/AwsAccounts/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: AwsAccountToJSON(requestParameters.awsAccount),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      AwsAccountFromJSON(jsonValue),
    );
  }

  /**
   */
  async updateAwsAccount(
    requestParameters: UpdateAwsAccountRequest,
    initOverrides?: RequestInit,
  ): Promise<AwsAccount> {
    const response = await this.updateAwsAccountRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}