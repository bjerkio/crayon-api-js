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
    AzurePlan,
    AzurePlanFromJSON,
    AzurePlanToJSON,
    CustomerTenant,
    CustomerTenantFromJSON,
    CustomerTenantToJSON,
    CustomerTenantDetailed,
    CustomerTenantDetailedFromJSON,
    CustomerTenantDetailedToJSON,
    CustomerTenantType,
    CustomerTenantTypeFromJSON,
    CustomerTenantTypeToJSON,
} from '../models';

export interface ApiV1CustomerTenantsCustomerTenantIdAzurePlanGetRequest {
    customerTenantId: number;
}

export interface ApiV1CustomerTenantsExistingPostRequest {
    syncFromPublisher?: boolean;
    customerTenantDetailed?: CustomerTenantDetailed;
}

export interface ApiV1CustomerTenantsGetRequest {
    organizationId?: number;
    publisherId?: number;
    programId?: number;
    consumerId?: number;
    domain?: string | null;
    domainPrefix?: string | null;
    customerTenantType?: CustomerTenantType;
    invoiceProfileId?: number;
    page?: number;
    pageSize?: number;
    search?: string | null;
}

export interface ApiV1CustomerTenantsIdDeleteRequest {
    id: number;
}

export interface ApiV1CustomerTenantsIdDetailedGetRequest {
    id: number;
}

export interface ApiV1CustomerTenantsIdGetRequest {
    id: number;
}

export interface ApiV1CustomerTenantsIdPutRequest {
    id: number;
    customerTenantDetailed?: CustomerTenantDetailed;
}

export interface ApiV1CustomerTenantsPostRequest {
    customerTenantDetailed?: CustomerTenantDetailed;
}

/**
 * 
 */
export class CustomerTenantsApi extends runtime.BaseAPI {

    /**
     */
    async apiV1CustomerTenantsCustomerTenantIdAzurePlanGetRaw(requestParameters: ApiV1CustomerTenantsCustomerTenantIdAzurePlanGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AzurePlan>> {
        if (requestParameters.customerTenantId === null || requestParameters.customerTenantId === undefined) {
            throw new runtime.RequiredError('customerTenantId','Required parameter requestParameters.customerTenantId was null or undefined when calling apiV1CustomerTenantsCustomerTenantIdAzurePlanGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/CustomerTenants/{customerTenantId}/azurePlan`.replace(`{${"customerTenantId"}}`, encodeURIComponent(String(requestParameters.customerTenantId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AzurePlanFromJSON(jsonValue));
    }

    /**
     */
    async apiV1CustomerTenantsCustomerTenantIdAzurePlanGet(requestParameters: ApiV1CustomerTenantsCustomerTenantIdAzurePlanGetRequest, initOverrides?: RequestInit): Promise<AzurePlan> {
        const response = await this.apiV1CustomerTenantsCustomerTenantIdAzurePlanGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1CustomerTenantsExistingPostRaw(requestParameters: ApiV1CustomerTenantsExistingPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CustomerTenantDetailed>> {
        const queryParameters: any = {};

        if (requestParameters.syncFromPublisher !== undefined) {
            queryParameters['syncFromPublisher'] = requestParameters.syncFromPublisher;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/CustomerTenants/existing`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerTenantDetailedToJSON(requestParameters.customerTenantDetailed),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerTenantDetailedFromJSON(jsonValue));
    }

    /**
     */
    async apiV1CustomerTenantsExistingPost(requestParameters: ApiV1CustomerTenantsExistingPostRequest, initOverrides?: RequestInit): Promise<CustomerTenantDetailed> {
        const response = await this.apiV1CustomerTenantsExistingPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1CustomerTenantsGetRaw(requestParameters: ApiV1CustomerTenantsGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<CustomerTenant>>> {
        const queryParameters: any = {};

        if (requestParameters.organizationId !== undefined) {
            queryParameters['OrganizationId'] = requestParameters.organizationId;
        }

        if (requestParameters.publisherId !== undefined) {
            queryParameters['PublisherId'] = requestParameters.publisherId;
        }

        if (requestParameters.programId !== undefined) {
            queryParameters['ProgramId'] = requestParameters.programId;
        }

        if (requestParameters.consumerId !== undefined) {
            queryParameters['ConsumerId'] = requestParameters.consumerId;
        }

        if (requestParameters.domain !== undefined) {
            queryParameters['Domain'] = requestParameters.domain;
        }

        if (requestParameters.domainPrefix !== undefined) {
            queryParameters['DomainPrefix'] = requestParameters.domainPrefix;
        }

        if (requestParameters.customerTenantType !== undefined) {
            queryParameters['CustomerTenantType'] = requestParameters.customerTenantType;
        }

        if (requestParameters.invoiceProfileId !== undefined) {
            queryParameters['InvoiceProfileId'] = requestParameters.invoiceProfileId;
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
            path: `/api/v1/CustomerTenants`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CustomerTenantFromJSON));
    }

    /**
     */
    async apiV1CustomerTenantsGet(requestParameters: ApiV1CustomerTenantsGetRequest, initOverrides?: RequestInit): Promise<Array<CustomerTenant>> {
        const response = await this.apiV1CustomerTenantsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1CustomerTenantsIdDeleteRaw(requestParameters: ApiV1CustomerTenantsIdDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiV1CustomerTenantsIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/CustomerTenants/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiV1CustomerTenantsIdDelete(requestParameters: ApiV1CustomerTenantsIdDeleteRequest, initOverrides?: RequestInit): Promise<void> {
        await this.apiV1CustomerTenantsIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiV1CustomerTenantsIdDetailedGetRaw(requestParameters: ApiV1CustomerTenantsIdDetailedGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CustomerTenantDetailed>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiV1CustomerTenantsIdDetailedGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/CustomerTenants/{id}/detailed`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerTenantDetailedFromJSON(jsonValue));
    }

    /**
     */
    async apiV1CustomerTenantsIdDetailedGet(requestParameters: ApiV1CustomerTenantsIdDetailedGetRequest, initOverrides?: RequestInit): Promise<CustomerTenantDetailed> {
        const response = await this.apiV1CustomerTenantsIdDetailedGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1CustomerTenantsIdGetRaw(requestParameters: ApiV1CustomerTenantsIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CustomerTenant>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiV1CustomerTenantsIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/CustomerTenants/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerTenantFromJSON(jsonValue));
    }

    /**
     */
    async apiV1CustomerTenantsIdGet(requestParameters: ApiV1CustomerTenantsIdGetRequest, initOverrides?: RequestInit): Promise<CustomerTenant> {
        const response = await this.apiV1CustomerTenantsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1CustomerTenantsIdPutRaw(requestParameters: ApiV1CustomerTenantsIdPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CustomerTenantDetailed>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiV1CustomerTenantsIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/CustomerTenants/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerTenantDetailedToJSON(requestParameters.customerTenantDetailed),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerTenantDetailedFromJSON(jsonValue));
    }

    /**
     */
    async apiV1CustomerTenantsIdPut(requestParameters: ApiV1CustomerTenantsIdPutRequest, initOverrides?: RequestInit): Promise<CustomerTenantDetailed> {
        const response = await this.apiV1CustomerTenantsIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1CustomerTenantsPostRaw(requestParameters: ApiV1CustomerTenantsPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CustomerTenantDetailed>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/CustomerTenants`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerTenantDetailedToJSON(requestParameters.customerTenantDetailed),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerTenantDetailedFromJSON(jsonValue));
    }

    /**
     */
    async apiV1CustomerTenantsPost(requestParameters: ApiV1CustomerTenantsPostRequest, initOverrides?: RequestInit): Promise<CustomerTenantDetailed> {
        const response = await this.apiV1CustomerTenantsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}