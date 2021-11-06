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

export interface ManagementLinksGetRequest {
    subscriptionIds?: Array<number> | null;
    resellerCustomerIds?: Array<number> | null;
    page?: number;
    pageSize?: number;
}

export interface ManagementLinksGroupedGetRequest {
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
    async managementLinksGetRaw(requestParameters: ManagementLinksGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ManagementLink>>> {
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
            path: `/ManagementLinks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ManagementLinkFromJSON));
    }

    /**
     */
    async managementLinksGet(requestParameters: ManagementLinksGetRequest, initOverrides?: RequestInit): Promise<Array<ManagementLink>> {
        const response = await this.managementLinksGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async managementLinksGroupedGetRaw(requestParameters: ManagementLinksGroupedGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ManagementLinkGrouped>>> {
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
            path: `/ManagementLinks/grouped`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ManagementLinkGroupedFromJSON));
    }

    /**
     */
    async managementLinksGroupedGet(requestParameters: ManagementLinksGroupedGetRequest, initOverrides?: RequestInit): Promise<Array<ManagementLinkGrouped>> {
        const response = await this.managementLinksGroupedGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
