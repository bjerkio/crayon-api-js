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
    Organization,
    OrganizationFromJSON,
    OrganizationToJSON,
    OrganizationSalesContact,
    OrganizationSalesContactFromJSON,
    OrganizationSalesContactToJSON,
} from '../models';

export interface OrganizationsGetRequest {
    page?: number;
    pageSize?: number;
    search?: string | null;
}

export interface OrganizationsHasAccessIdGetRequest {
    id: number;
}

export interface OrganizationsIdGetRequest {
    id: number;
}

export interface OrganizationsOrganizationIdSalescontactGetRequest {
    organizationId: number;
}

/**
 * 
 */
export class OrganizationsApi extends runtime.BaseAPI {

    /**
     */
    async organizationsGetRaw(requestParameters: OrganizationsGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Organization>>> {
        const queryParameters: any = {};

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
            path: `/Organizations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrganizationFromJSON));
    }

    /**
     */
    async organizationsGet(requestParameters: OrganizationsGetRequest, initOverrides?: RequestInit): Promise<Array<Organization>> {
        const response = await this.organizationsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async organizationsHasAccessIdGetRaw(requestParameters: OrganizationsHasAccessIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling organizationsHasAccessIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Organizations/HasAccess/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async organizationsHasAccessIdGet(requestParameters: OrganizationsHasAccessIdGetRequest, initOverrides?: RequestInit): Promise<boolean> {
        const response = await this.organizationsHasAccessIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async organizationsIdGetRaw(requestParameters: OrganizationsIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Organization>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling organizationsIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Organizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationFromJSON(jsonValue));
    }

    /**
     */
    async organizationsIdGet(requestParameters: OrganizationsIdGetRequest, initOverrides?: RequestInit): Promise<Organization> {
        const response = await this.organizationsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async organizationsOrganizationIdSalescontactGetRaw(requestParameters: OrganizationsOrganizationIdSalescontactGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OrganizationSalesContact>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling organizationsOrganizationIdSalescontactGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Organizations/{organizationId}/salescontact`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationSalesContactFromJSON(jsonValue));
    }

    /**
     */
    async organizationsOrganizationIdSalescontactGet(requestParameters: OrganizationsOrganizationIdSalescontactGetRequest, initOverrides?: RequestInit): Promise<OrganizationSalesContact> {
        const response = await this.organizationsOrganizationIdSalescontactGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
