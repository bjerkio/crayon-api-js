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
import { Grouping, GroupingFromJSON, GroupingToJSON } from '../models';

export interface CreateGroupingRequest {
  grouping?: Grouping;
}

export interface GetGroupingRequest {
  id: number;
}

export interface GroupingsIdDeleteRequest {
  id: number;
}

export interface GroupingsIdPutRequest {
  id: number;
  grouping?: Grouping;
}

export interface ListGroupingsRequest {
  organizationId?: number;
  includeRemoved?: boolean;
  search?: string | null;
  page?: number;
  pageSize?: number;
}

/**
 *
 */
export class GroupingsApi extends runtime.BaseAPI {
  /**
   */
  async createGroupingRaw(
    requestParameters: CreateGroupingRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Grouping>> {
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
        path: `/Groupings`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: GroupingToJSON(requestParameters.grouping),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      GroupingFromJSON(jsonValue),
    );
  }

  /**
   */
  async createGrouping(
    requestParameters: CreateGroupingRequest,
    initOverrides?: RequestInit,
  ): Promise<Grouping> {
    const response = await this.createGroupingRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async getGroupingRaw(
    requestParameters: GetGroupingRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Grouping>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getGrouping.',
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
        path: `/Groupings/{id}`.replace(
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
      GroupingFromJSON(jsonValue),
    );
  }

  /**
   */
  async getGrouping(
    requestParameters: GetGroupingRequest,
    initOverrides?: RequestInit,
  ): Promise<Grouping> {
    const response = await this.getGroupingRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async groupingsIdDeleteRaw(
    requestParameters: GroupingsIdDeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling groupingsIdDelete.',
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
        path: `/Groupings/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async groupingsIdDelete(
    requestParameters: GroupingsIdDeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.groupingsIdDeleteRaw(requestParameters, initOverrides);
  }

  /**
   */
  async groupingsIdPutRaw(
    requestParameters: GroupingsIdPutRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Grouping>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling groupingsIdPut.',
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
        path: `/Groupings/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: GroupingToJSON(requestParameters.grouping),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      GroupingFromJSON(jsonValue),
    );
  }

  /**
   */
  async groupingsIdPut(
    requestParameters: GroupingsIdPutRequest,
    initOverrides?: RequestInit,
  ): Promise<Grouping> {
    const response = await this.groupingsIdPutRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async listGroupingsRaw(
    requestParameters: ListGroupingsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<Grouping>>> {
    const queryParameters: any = {};

    if (requestParameters.organizationId !== undefined) {
      queryParameters['OrganizationId'] = requestParameters.organizationId;
    }

    if (requestParameters.includeRemoved !== undefined) {
      queryParameters['IncludeRemoved'] = requestParameters.includeRemoved;
    }

    if (requestParameters.search !== undefined) {
      queryParameters['Search'] = requestParameters.search;
    }

    if (requestParameters.page !== undefined) {
      queryParameters['Page'] = requestParameters.page;
    }

    if (requestParameters.pageSize !== undefined) {
      queryParameters['PageSize'] = requestParameters.pageSize;
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
        path: `/Groupings`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(GroupingFromJSON),
    );
  }

  /**
   */
  async listGroupings(
    requestParameters: ListGroupingsRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<Grouping>> {
    const response = await this.listGroupingsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
