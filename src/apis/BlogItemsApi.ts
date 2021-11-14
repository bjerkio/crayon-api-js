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
import { BlogItem, BlogItemFromJSON, BlogItemToJSON } from '../models';

export interface ListBlogItemsRequest {
  count?: number;
  organizationId?: number;
}

/**
 *
 */
export class BlogItemsApi extends runtime.BaseAPI {
  /**
   */
  async listBlogItemsRaw(
    requestParameters: ListBlogItemsRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<BlogItem>>> {
    const queryParameters: any = {};

    if (requestParameters.count !== undefined) {
      queryParameters['count'] = requestParameters.count;
    }

    if (requestParameters.organizationId !== undefined) {
      queryParameters['organizationId'] = requestParameters.organizationId;
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
        path: `/BlogItems`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(BlogItemFromJSON),
    );
  }

  /**
   */
  async listBlogItems(
    requestParameters: ListBlogItemsRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<BlogItem>> {
    const response = await this.listBlogItemsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
