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
  ProductContainer,
  ProductContainerFromJSON,
  ProductContainerToJSON,
  ProductContainerCategory,
  ProductContainerCategoryFromJSON,
  ProductContainerCategoryToJSON,
  ProductContainerType,
  ProductContainerTypeFromJSON,
  ProductContainerTypeToJSON,
  ProductRowPatch,
  ProductRowPatchFromJSON,
  ProductRowPatchToJSON,
} from '../models';

export interface GetOrCreateProductContainerShoppingCartRequest {
  organizationId?: number;
}

export interface GetProductContainerRequest {
  id: number;
}

export interface GetProductContainerRowIssueRequest {
  id: number;
}

export interface GetProductContainersReportByMonthRequest {
  year?: number;
  month?: number;
  programId?: number;
  organizationId?: number;
  copyLast?: boolean;
}

export interface ListProductContainersRequest {
  organizationId?: number;
  search?: string | null;
  page?: number;
  pageSize?: number;
  activeDraft?: boolean;
  programId?: number;
  year?: number;
  month?: number;
  userId?: string | null;
  sentByUserId?: string | null;
  type?: ProductContainerType;
  category?: ProductContainerCategory;
  from?: Date | null;
  to?: Date | null;
  includeRemoved?: boolean;
  includeSubsidiaries?: boolean;
}

export interface ProductContainersIdDeleteRequest {
  id: number;
}

export interface ProductContainersIdPutRequest {
  id: number;
  requireEulaAnalysis?: boolean | null;
  productContainer?: ProductContainer;
}

export interface UpdateProductRowRequest {
  productContainerId: number;
  productRowId: number;
  productRowPatch?: ProductRowPatch;
}

/**
 *
 */
export class ProductContainersApi extends runtime.BaseAPI {
  /**
   */
  async getOrCreateProductContainerShoppingCartRaw(
    requestParameters: GetOrCreateProductContainerShoppingCartRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<ProductContainer>> {
    const queryParameters: any = {};

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
        path: `/ProductContainers/getorcreateshoppingcart`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      ProductContainerFromJSON(jsonValue),
    );
  }

  /**
   */
  async getOrCreateProductContainerShoppingCart(
    requestParameters: GetOrCreateProductContainerShoppingCartRequest,
    initOverrides?: RequestInit,
  ): Promise<ProductContainer> {
    const response = await this.getOrCreateProductContainerShoppingCartRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async getProductContainerRaw(
    requestParameters: GetProductContainerRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<ProductContainer>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getProductContainer.',
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
        path: `/ProductContainers/{id}`.replace(
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
      ProductContainerFromJSON(jsonValue),
    );
  }

  /**
   */
  async getProductContainer(
    requestParameters: GetProductContainerRequest,
    initOverrides?: RequestInit,
  ): Promise<ProductContainer> {
    const response = await this.getProductContainerRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async getProductContainerRowIssueRaw(
    requestParameters: GetProductContainerRowIssueRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<ProductContainer>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getProductContainerRowIssue.',
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
        path: `/ProductContainers/rowissues/{id}`.replace(
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
      ProductContainerFromJSON(jsonValue),
    );
  }

  /**
   */
  async getProductContainerRowIssue(
    requestParameters: GetProductContainerRowIssueRequest,
    initOverrides?: RequestInit,
  ): Promise<ProductContainer> {
    const response = await this.getProductContainerRowIssueRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async getProductContainersReportByMonthRaw(
    requestParameters: GetProductContainersReportByMonthRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<ProductContainer>> {
    const queryParameters: any = {};

    if (requestParameters.year !== undefined) {
      queryParameters['year'] = requestParameters.year;
    }

    if (requestParameters.month !== undefined) {
      queryParameters['month'] = requestParameters.month;
    }

    if (requestParameters.programId !== undefined) {
      queryParameters['programId'] = requestParameters.programId;
    }

    if (requestParameters.organizationId !== undefined) {
      queryParameters['organizationId'] = requestParameters.organizationId;
    }

    if (requestParameters.copyLast !== undefined) {
      queryParameters['copyLast'] = requestParameters.copyLast;
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
        path: `/ProductContainers/reportbymonth`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      ProductContainerFromJSON(jsonValue),
    );
  }

  /**
   */
  async getProductContainersReportByMonth(
    requestParameters: GetProductContainersReportByMonthRequest,
    initOverrides?: RequestInit,
  ): Promise<ProductContainer> {
    const response = await this.getProductContainersReportByMonthRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async listProductContainersRaw(
    requestParameters: ListProductContainersRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<ProductContainer>>> {
    const queryParameters: any = {};

    if (requestParameters.organizationId !== undefined) {
      queryParameters['OrganizationId'] = requestParameters.organizationId;
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

    if (requestParameters.activeDraft !== undefined) {
      queryParameters['ActiveDraft'] = requestParameters.activeDraft;
    }

    if (requestParameters.programId !== undefined) {
      queryParameters['ProgramId'] = requestParameters.programId;
    }

    if (requestParameters.year !== undefined) {
      queryParameters['Year'] = requestParameters.year;
    }

    if (requestParameters.month !== undefined) {
      queryParameters['Month'] = requestParameters.month;
    }

    if (requestParameters.userId !== undefined) {
      queryParameters['UserId'] = requestParameters.userId;
    }

    if (requestParameters.sentByUserId !== undefined) {
      queryParameters['SentByUserId'] = requestParameters.sentByUserId;
    }

    if (requestParameters.type !== undefined) {
      queryParameters['Type'] = requestParameters.type;
    }

    if (requestParameters.category !== undefined) {
      queryParameters['Category'] = requestParameters.category;
    }

    if (requestParameters.from !== undefined) {
      queryParameters['From'] = (requestParameters.from as any).toISOString();
    }

    if (requestParameters.to !== undefined) {
      queryParameters['To'] = (requestParameters.to as any).toISOString();
    }

    if (requestParameters.includeRemoved !== undefined) {
      queryParameters['IncludeRemoved'] = requestParameters.includeRemoved;
    }

    if (requestParameters.includeSubsidiaries !== undefined) {
      queryParameters['IncludeSubsidiaries'] =
        requestParameters.includeSubsidiaries;
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
        path: `/ProductContainers`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(ProductContainerFromJSON),
    );
  }

  /**
   */
  async listProductContainers(
    requestParameters: ListProductContainersRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<ProductContainer>> {
    const response = await this.listProductContainersRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async productContainersIdDeleteRaw(
    requestParameters: ProductContainersIdDeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<boolean>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling productContainersIdDelete.',
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
        path: `/ProductContainers/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.TextApiResponse(response) as any;
  }

  /**
   */
  async productContainersIdDelete(
    requestParameters: ProductContainersIdDeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<boolean> {
    const response = await this.productContainersIdDeleteRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async productContainersIdPutRaw(
    requestParameters: ProductContainersIdPutRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<ProductContainer>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling productContainersIdPut.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.requireEulaAnalysis !== undefined) {
      queryParameters['requireEulaAnalysis'] =
        requestParameters.requireEulaAnalysis;
    }

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
        path: `/ProductContainers/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: ProductContainerToJSON(requestParameters.productContainer),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      ProductContainerFromJSON(jsonValue),
    );
  }

  /**
   */
  async productContainersIdPut(
    requestParameters: ProductContainersIdPutRequest,
    initOverrides?: RequestInit,
  ): Promise<ProductContainer> {
    const response = await this.productContainersIdPutRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   */
  async updateProductRowRaw(
    requestParameters: UpdateProductRowRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<ProductContainer>> {
    if (
      requestParameters.productContainerId === null ||
      requestParameters.productContainerId === undefined
    ) {
      throw new runtime.RequiredError(
        'productContainerId',
        'Required parameter requestParameters.productContainerId was null or undefined when calling updateProductRow.',
      );
    }

    if (
      requestParameters.productRowId === null ||
      requestParameters.productRowId === undefined
    ) {
      throw new runtime.RequiredError(
        'productRowId',
        'Required parameter requestParameters.productRowId was null or undefined when calling updateProductRow.',
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
        path: `/ProductContainers/{productContainerId}/row/{productRowId}`
          .replace(
            `{${'productContainerId'}}`,
            encodeURIComponent(String(requestParameters.productContainerId)),
          )
          .replace(
            `{${'productRowId'}}`,
            encodeURIComponent(String(requestParameters.productRowId)),
          ),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: ProductRowPatchToJSON(requestParameters.productRowPatch),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      ProductContainerFromJSON(jsonValue),
    );
  }

  /**
   */
  async updateProductRow(
    requestParameters: UpdateProductRowRequest,
    initOverrides?: RequestInit,
  ): Promise<ProductContainer> {
    const response = await this.updateProductRowRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
