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
    Asset,
    AssetFromJSON,
    AssetToJSON,
    AssetOrder,
    AssetOrderFromJSON,
    AssetOrderToJSON,
    AssetSortBy,
    AssetSortByFromJSON,
    AssetSortByToJSON,
    AssetStatus,
    AssetStatusFromJSON,
    AssetStatusToJSON,
    AssetTags,
    AssetTagsFromJSON,
    AssetTagsToJSON,
    AssetType,
    AssetTypeFromJSON,
    AssetTypeToJSON,
    SortOrder,
    SortOrderFromJSON,
    SortOrderToJSON,
} from '../models';

export interface CreateAssetCheckoutOrderRequest {
    assetOrder?: AssetOrder;
}

export interface CreateAssetVerifyOrderRequest {
    assetOrder?: AssetOrder;
}

export interface DeleteAssetTagsRequest {
    assetId: number;
}

export interface GetAssetRequest {
    id: number;
}

export interface ListAssetOrdersRequest {
    resellerCustomerId?: number;
    publisherId?: number;
    externalOrderId?: string | null;
    externalOrderIds?: Array<string> | null;
    reservationId?: string | null;
    assetType?: AssetType;
    status?: AssetStatus;
    page?: number;
    pageSize?: number;
    search?: string | null;
    sortBy?: AssetSortBy;
    sortOrder?: SortOrder;
}

export interface ListAssetTagsRequest {
    assetId: number;
    assetTags?: AssetTags;
}

export interface ListAssetsRequest {
    resellerCustomerId?: number;
    publisherId?: number;
    externalOrderId?: string | null;
    externalOrderIds?: Array<string> | null;
    reservationId?: string | null;
    assetType?: AssetType;
    status?: AssetStatus;
    page?: number;
    pageSize?: number;
    search?: string | null;
    sortBy?: AssetSortBy;
    sortOrder?: SortOrder;
}

export interface UpdateAssetRequest {
    assetId: number;
    asset?: Asset;
}

export interface UpdateAssetTagsRequest {
    assetId: number;
    assetTags?: AssetTags;
}

/**
 * 
 */
export class AssetsApi extends runtime.BaseAPI {

    /**
     */
    async createAssetCheckoutOrderRaw(requestParameters: CreateAssetCheckoutOrderRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Assets/checkout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssetOrderToJSON(requestParameters.assetOrder),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async createAssetCheckoutOrder(requestParameters: CreateAssetCheckoutOrderRequest, initOverrides?: RequestInit): Promise<void> {
        await this.createAssetCheckoutOrderRaw(requestParameters, initOverrides);
    }

    /**
     */
    async createAssetVerifyOrderRaw(requestParameters: CreateAssetVerifyOrderRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AssetOrder>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Assets/verify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssetOrderToJSON(requestParameters.assetOrder),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetOrderFromJSON(jsonValue));
    }

    /**
     */
    async createAssetVerifyOrder(requestParameters: CreateAssetVerifyOrderRequest, initOverrides?: RequestInit): Promise<AssetOrder> {
        const response = await this.createAssetVerifyOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteAssetTagsRaw(requestParameters: DeleteAssetTagsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.assetId === null || requestParameters.assetId === undefined) {
            throw new runtime.RequiredError('assetId','Required parameter requestParameters.assetId was null or undefined when calling deleteAssetTags.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Assets/{assetId}/tags`.replace(`{${"assetId"}}`, encodeURIComponent(String(requestParameters.assetId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteAssetTags(requestParameters: DeleteAssetTagsRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteAssetTagsRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAssetRaw(requestParameters: GetAssetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Asset>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getAsset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Assets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFromJSON(jsonValue));
    }

    /**
     */
    async getAsset(requestParameters: GetAssetRequest, initOverrides?: RequestInit): Promise<Asset> {
        const response = await this.getAssetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async listAssetOrdersRaw(requestParameters: ListAssetOrdersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<AssetOrder>>> {
        const queryParameters: any = {};

        if (requestParameters.resellerCustomerId !== undefined) {
            queryParameters['ResellerCustomerId'] = requestParameters.resellerCustomerId;
        }

        if (requestParameters.publisherId !== undefined) {
            queryParameters['PublisherId'] = requestParameters.publisherId;
        }

        if (requestParameters.externalOrderId !== undefined) {
            queryParameters['ExternalOrderId'] = requestParameters.externalOrderId;
        }

        if (requestParameters.externalOrderIds) {
            queryParameters['ExternalOrderIds'] = requestParameters.externalOrderIds;
        }

        if (requestParameters.reservationId !== undefined) {
            queryParameters['ReservationId'] = requestParameters.reservationId;
        }

        if (requestParameters.assetType !== undefined) {
            queryParameters['AssetType'] = requestParameters.assetType;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['Status'] = requestParameters.status;
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

        if (requestParameters.sortBy !== undefined) {
            queryParameters['SortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.sortOrder !== undefined) {
            queryParameters['SortOrder'] = requestParameters.sortOrder;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Assets/orders`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AssetOrderFromJSON));
    }

    /**
     */
    async listAssetOrders(requestParameters: ListAssetOrdersRequest, initOverrides?: RequestInit): Promise<Array<AssetOrder>> {
        const response = await this.listAssetOrdersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async listAssetTagsRaw(requestParameters: ListAssetTagsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.assetId === null || requestParameters.assetId === undefined) {
            throw new runtime.RequiredError('assetId','Required parameter requestParameters.assetId was null or undefined when calling listAssetTags.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Assets/{assetId}/tags`.replace(`{${"assetId"}}`, encodeURIComponent(String(requestParameters.assetId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssetTagsToJSON(requestParameters.assetTags),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async listAssetTags(requestParameters: ListAssetTagsRequest, initOverrides?: RequestInit): Promise<void> {
        await this.listAssetTagsRaw(requestParameters, initOverrides);
    }

    /**
     */
    async listAssetsRaw(requestParameters: ListAssetsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Asset>>> {
        const queryParameters: any = {};

        if (requestParameters.resellerCustomerId !== undefined) {
            queryParameters['ResellerCustomerId'] = requestParameters.resellerCustomerId;
        }

        if (requestParameters.publisherId !== undefined) {
            queryParameters['PublisherId'] = requestParameters.publisherId;
        }

        if (requestParameters.externalOrderId !== undefined) {
            queryParameters['ExternalOrderId'] = requestParameters.externalOrderId;
        }

        if (requestParameters.externalOrderIds) {
            queryParameters['ExternalOrderIds'] = requestParameters.externalOrderIds;
        }

        if (requestParameters.reservationId !== undefined) {
            queryParameters['ReservationId'] = requestParameters.reservationId;
        }

        if (requestParameters.assetType !== undefined) {
            queryParameters['AssetType'] = requestParameters.assetType;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['Status'] = requestParameters.status;
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

        if (requestParameters.sortBy !== undefined) {
            queryParameters['SortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.sortOrder !== undefined) {
            queryParameters['SortOrder'] = requestParameters.sortOrder;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Assets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AssetFromJSON));
    }

    /**
     */
    async listAssets(requestParameters: ListAssetsRequest, initOverrides?: RequestInit): Promise<Array<Asset>> {
        const response = await this.listAssetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateAssetRaw(requestParameters: UpdateAssetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.assetId === null || requestParameters.assetId === undefined) {
            throw new runtime.RequiredError('assetId','Required parameter requestParameters.assetId was null or undefined when calling updateAsset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Assets/{assetId}`.replace(`{${"assetId"}}`, encodeURIComponent(String(requestParameters.assetId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AssetToJSON(requestParameters.asset),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updateAsset(requestParameters: UpdateAssetRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updateAssetRaw(requestParameters, initOverrides);
    }

    /**
     */
    async updateAssetTagsRaw(requestParameters: UpdateAssetTagsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.assetId === null || requestParameters.assetId === undefined) {
            throw new runtime.RequiredError('assetId','Required parameter requestParameters.assetId was null or undefined when calling updateAssetTags.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Assets/{assetId}/tags`.replace(`{${"assetId"}}`, encodeURIComponent(String(requestParameters.assetId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AssetTagsToJSON(requestParameters.assetTags),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updateAssetTags(requestParameters: UpdateAssetTagsRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updateAssetTagsRaw(requestParameters, initOverrides);
    }

}
