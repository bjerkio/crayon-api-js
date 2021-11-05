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
    InvoiceProfile,
    InvoiceProfileFromJSON,
    InvoiceProfileToJSON,
} from '../models';

export interface ApiV1InvoiceProfilesGetRequest {
    organizationId?: number;
    page?: number;
    pageSize?: number;
    search?: string | null;
}

export interface ApiV1InvoiceProfilesIdDeleteRequest {
    id: number;
}

export interface ApiV1InvoiceProfilesIdGetRequest {
    id: number;
}

export interface ApiV1InvoiceProfilesIdPutRequest {
    id: number;
    invoiceProfile?: InvoiceProfile;
}

export interface ApiV1InvoiceProfilesPostRequest {
    invoiceProfile?: InvoiceProfile;
}

/**
 * 
 */
export class InvoiceProfilesApi extends runtime.BaseAPI {

    /**
     */
    async apiV1InvoiceProfilesGetRaw(requestParameters: ApiV1InvoiceProfilesGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<InvoiceProfile>>> {
        const queryParameters: any = {};

        if (requestParameters.organizationId !== undefined) {
            queryParameters['OrganizationId'] = requestParameters.organizationId;
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
            path: `/api/v1/InvoiceProfiles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InvoiceProfileFromJSON));
    }

    /**
     */
    async apiV1InvoiceProfilesGet(requestParameters: ApiV1InvoiceProfilesGetRequest, initOverrides?: RequestInit): Promise<Array<InvoiceProfile>> {
        const response = await this.apiV1InvoiceProfilesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1InvoiceProfilesIdDeleteRaw(requestParameters: ApiV1InvoiceProfilesIdDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiV1InvoiceProfilesIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/InvoiceProfiles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async apiV1InvoiceProfilesIdDelete(requestParameters: ApiV1InvoiceProfilesIdDeleteRequest, initOverrides?: RequestInit): Promise<boolean> {
        const response = await this.apiV1InvoiceProfilesIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1InvoiceProfilesIdGetRaw(requestParameters: ApiV1InvoiceProfilesIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InvoiceProfile>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiV1InvoiceProfilesIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/InvoiceProfiles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceProfileFromJSON(jsonValue));
    }

    /**
     */
    async apiV1InvoiceProfilesIdGet(requestParameters: ApiV1InvoiceProfilesIdGetRequest, initOverrides?: RequestInit): Promise<InvoiceProfile> {
        const response = await this.apiV1InvoiceProfilesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1InvoiceProfilesIdPutRaw(requestParameters: ApiV1InvoiceProfilesIdPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InvoiceProfile>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiV1InvoiceProfilesIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/InvoiceProfiles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceProfileToJSON(requestParameters.invoiceProfile),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceProfileFromJSON(jsonValue));
    }

    /**
     */
    async apiV1InvoiceProfilesIdPut(requestParameters: ApiV1InvoiceProfilesIdPutRequest, initOverrides?: RequestInit): Promise<InvoiceProfile> {
        const response = await this.apiV1InvoiceProfilesIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1InvoiceProfilesPostRaw(requestParameters: ApiV1InvoiceProfilesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InvoiceProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/InvoiceProfiles`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceProfileToJSON(requestParameters.invoiceProfile),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceProfileFromJSON(jsonValue));
    }

    /**
     */
    async apiV1InvoiceProfilesPost(requestParameters: ApiV1InvoiceProfilesPostRequest, initOverrides?: RequestInit): Promise<InvoiceProfile> {
        const response = await this.apiV1InvoiceProfilesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
