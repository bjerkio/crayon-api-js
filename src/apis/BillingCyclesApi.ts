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
  BillingCycle,
  BillingCycleFromJSON,
  BillingCycleToJSON,
} from '../models';

export interface GetBillingCycleProductVariantRequest {
  productVariantId: number;
}

export interface ListBillingCyclesRequest {
  includeUnknown?: boolean;
}

/**
 *
 */
export class BillingCyclesApi extends runtime.BaseAPI {
  /**
   */
  async getBillingCycleProductVariantRaw(
    requestParameters: GetBillingCycleProductVariantRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<BillingCycle>>> {
    if (
      requestParameters.productVariantId === null ||
      requestParameters.productVariantId === undefined
    ) {
      throw new runtime.RequiredError(
        'productVariantId',
        'Required parameter requestParameters.productVariantId was null or undefined when calling getBillingCycleProductVariant.',
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
        path: `/BillingCycles/productVariant/{productVariantId}`.replace(
          `{${'productVariantId'}}`,
          encodeURIComponent(String(requestParameters.productVariantId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(BillingCycleFromJSON),
    );
  }

  /**
   */
  async getBillingCycleProductVariant(
    requestParameters: GetBillingCycleProductVariantRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<BillingCycle>> {
    const response = await this.getBillingCycleProductVariantRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async listBillingCyclesRaw(
    requestParameters: ListBillingCyclesRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<BillingCycle>>> {
    const queryParameters: any = {};

    if (requestParameters.includeUnknown !== undefined) {
      queryParameters['includeUnknown'] = requestParameters.includeUnknown;
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
        path: `/BillingCycles`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(BillingCycleFromJSON),
    );
  }

  /**
   */
  async listBillingCycles(
    requestParameters: ListBillingCyclesRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<BillingCycle>> {
    const response = await this.listBillingCyclesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async listBillingCyclesCSPNameDictionaryRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<{ [key: string]: string }>> {
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
        path: `/BillingCycles/cspNameDictionary`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   */
  async listBillingCyclesCSPNameDictionary(
    initOverrides?: RequestInit,
  ): Promise<{ [key: string]: string }> {
    const response = await this.listBillingCyclesCSPNameDictionaryRaw(
      initOverrides,
    );
    return await response.value();
  }
}
