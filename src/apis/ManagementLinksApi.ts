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
    ManagementLink,
    ManagementLinkFromJSON,
    ManagementLinkToJSON,
    ManagementLinkGrouped,
    ManagementLinkGroupedFromJSON,
    ManagementLinkGroupedToJSON,
} from '../models';

export interface ApiV1ManagementLinksGetRequest {
    subscriptionIds?: Array<number> | null;
    resellerCustomerIds?: Array<number> | null;
    page?: number;
    pageSize?: number;
}

export interface ApiV1ManagementLinksGroupedGetRequest {
    subscriptionIds?: Array<number> | null;
    resellerCustomerIds?: Array<number> | null;
    page?: number;
    pageSize?: number;
}

/**
 * 
 */
export class ManagementLinksApi extends runtime.BaseAPI {

    /**
     */
    async apiV1ManagementLinksGetRaw(requestParameters: ApiV1ManagementLinksGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ManagementLink>>> {
        const queryParameters: any = {};

        if (requestParameters.subscriptionIds) {
            queryParameters['SubscriptionIds'] = requestParameters.subscriptionIds;
        }

        if (requestParameters.resellerCustomerIds) {
            queryParameters['ResellerCustomerIds'] = requestParameters.resellerCustomerIds;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['Page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['PageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/ManagementLinks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ManagementLinkFromJSON));
    }

    /**
     */
    async apiV1ManagementLinksGet(requestParameters: ApiV1ManagementLinksGetRequest, initOverrides?: RequestInit): Promise<Array<ManagementLink>> {
        const response = await this.apiV1ManagementLinksGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1ManagementLinksGroupedGetRaw(requestParameters: ApiV1ManagementLinksGroupedGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ManagementLinkGrouped>>> {
        const queryParameters: any = {};

        if (requestParameters.subscriptionIds) {
            queryParameters['SubscriptionIds'] = requestParameters.subscriptionIds;
        }

        if (requestParameters.resellerCustomerIds) {
            queryParameters['ResellerCustomerIds'] = requestParameters.resellerCustomerIds;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['Page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['PageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/ManagementLinks/grouped`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ManagementLinkGroupedFromJSON));
    }

    /**
     */
    async apiV1ManagementLinksGroupedGet(requestParameters: ApiV1ManagementLinksGroupedGetRequest, initOverrides?: RequestInit): Promise<Array<ManagementLinkGrouped>> {
        const response = await this.apiV1ManagementLinksGroupedGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}