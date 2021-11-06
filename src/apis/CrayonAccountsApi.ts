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
    CrayonAccount,
    CrayonAccountFromJSON,
    CrayonAccountToJSON,
    CustomerTenantType,
    CustomerTenantTypeFromJSON,
    CustomerTenantTypeToJSON,
} from '../models';

export interface CrayonAccountsGetRequest {
    organizationId?: number;
    publisherId?: number;
    consumerId?: number;
    customerTenantType?: CustomerTenantType;
    page?: number;
    pageSize?: number;
    search?: string | null;
}

export interface CrayonAccountsIdGetRequest {
    id: number;
}

export interface CrayonAccountsIdPutRequest {
    id: number;
    crayonAccount?: CrayonAccount;
}

export interface CrayonAccountsPostRequest {
    crayonAccount?: CrayonAccount;
}

/**
 * 
 */
export class CrayonAccountsApi extends runtime.BaseAPI {

    /**
     */
    async crayonAccountsGetRaw(requestParameters: CrayonAccountsGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<CrayonAccount>>> {
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
            queryParameters['CustomerTenantType'] = requestParameters.customerTenantType;
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

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/CrayonAccounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CrayonAccountFromJSON));
    }

    /**
     */
    async crayonAccountsGet(requestParameters: CrayonAccountsGetRequest, initOverrides?: RequestInit): Promise<Array<CrayonAccount>> {
        const response = await this.crayonAccountsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async crayonAccountsIdGetRaw(requestParameters: CrayonAccountsIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CrayonAccount>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling crayonAccountsIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/CrayonAccounts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CrayonAccountFromJSON(jsonValue));
    }

    /**
     */
    async crayonAccountsIdGet(requestParameters: CrayonAccountsIdGetRequest, initOverrides?: RequestInit): Promise<CrayonAccount> {
        const response = await this.crayonAccountsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async crayonAccountsIdPutRaw(requestParameters: CrayonAccountsIdPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CrayonAccount>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling crayonAccountsIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/CrayonAccounts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CrayonAccountToJSON(requestParameters.crayonAccount),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CrayonAccountFromJSON(jsonValue));
    }

    /**
     */
    async crayonAccountsIdPut(requestParameters: CrayonAccountsIdPutRequest, initOverrides?: RequestInit): Promise<CrayonAccount> {
        const response = await this.crayonAccountsIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async crayonAccountsPostRaw(requestParameters: CrayonAccountsPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CrayonAccount>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/CrayonAccounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CrayonAccountToJSON(requestParameters.crayonAccount),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CrayonAccountFromJSON(jsonValue));
    }

    /**
     */
    async crayonAccountsPost(requestParameters: CrayonAccountsPostRequest, initOverrides?: RequestInit): Promise<CrayonAccount> {
        const response = await this.crayonAccountsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
