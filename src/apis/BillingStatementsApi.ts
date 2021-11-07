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
    BillingStatement,
    BillingStatementFromJSON,
    BillingStatementToJSON,
    GroupedBillingStatement,
    GroupedBillingStatementFromJSON,
    GroupedBillingStatementToJSON,
    ProvisionType,
    ProvisionTypeFromJSON,
    ProvisionTypeToJSON,
} from '../models';

export interface GetBillingStatementFileRequest {
    id: number;
}

export interface GetBillingStatementReconciliationFileRequest {
    id: number;
}

export interface GetBillingStatementRecordsFileRequest {
    id: number;
}

export interface ListBillingStatementsRequest {
    invoiceProfileId?: number;
    organizationId?: number;
    provisionType?: ProvisionType;
    from?: Date | null;
    to?: Date | null;
    page?: number;
    pageSize?: number;
}

export interface ListGroupedBillingStatementsRequest {
    invoiceProfileId?: number;
    organizationId?: number;
    provisionType?: ProvisionType;
    from?: Date | null;
    to?: Date | null;
    page?: number;
    pageSize?: number;
}

/**
 * 
 */
export class BillingStatementsApi extends runtime.BaseAPI {

    /**
     */
    async getBillingStatementFileRaw(requestParameters: GetBillingStatementFileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getBillingStatementFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/BillingStatements/file/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async getBillingStatementFile(requestParameters: GetBillingStatementFileRequest, initOverrides?: RequestInit): Promise<void> {
        await this.getBillingStatementFileRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getBillingStatementReconciliationFileRaw(requestParameters: GetBillingStatementReconciliationFileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getBillingStatementReconciliationFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/BillingStatements/{id}/reconciliationfile`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async getBillingStatementReconciliationFile(requestParameters: GetBillingStatementReconciliationFileRequest, initOverrides?: RequestInit): Promise<void> {
        await this.getBillingStatementReconciliationFileRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getBillingStatementRecordsFileRaw(requestParameters: GetBillingStatementRecordsFileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getBillingStatementRecordsFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/BillingStatements/{id}/billingrecordsfile`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async getBillingStatementRecordsFile(requestParameters: GetBillingStatementRecordsFileRequest, initOverrides?: RequestInit): Promise<void> {
        await this.getBillingStatementRecordsFileRaw(requestParameters, initOverrides);
    }

    /**
     */
    async listBillingStatementsRaw(requestParameters: ListBillingStatementsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<BillingStatement>>> {
        const queryParameters: any = {};

        if (requestParameters.invoiceProfileId !== undefined) {
            queryParameters['InvoiceProfileId'] = requestParameters.invoiceProfileId;
        }

        if (requestParameters.organizationId !== undefined) {
            queryParameters['OrganizationId'] = requestParameters.organizationId;
        }

        if (requestParameters.provisionType !== undefined) {
            queryParameters['ProvisionType'] = requestParameters.provisionType;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['From'] = (requestParameters.from as any).toISOString();
        }

        if (requestParameters.to !== undefined) {
            queryParameters['To'] = (requestParameters.to as any).toISOString();
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
            path: `/BillingStatements`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BillingStatementFromJSON));
    }

    /**
     */
    async listBillingStatements(requestParameters: ListBillingStatementsRequest, initOverrides?: RequestInit): Promise<Array<BillingStatement>> {
        const response = await this.listBillingStatementsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async listGroupedBillingStatementsRaw(requestParameters: ListGroupedBillingStatementsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<GroupedBillingStatement>>> {
        const queryParameters: any = {};

        if (requestParameters.invoiceProfileId !== undefined) {
            queryParameters['InvoiceProfileId'] = requestParameters.invoiceProfileId;
        }

        if (requestParameters.organizationId !== undefined) {
            queryParameters['OrganizationId'] = requestParameters.organizationId;
        }

        if (requestParameters.provisionType !== undefined) {
            queryParameters['ProvisionType'] = requestParameters.provisionType;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['From'] = (requestParameters.from as any).toISOString();
        }

        if (requestParameters.to !== undefined) {
            queryParameters['To'] = (requestParameters.to as any).toISOString();
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
            path: `/BillingStatements/grouped`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupedBillingStatementFromJSON));
    }

    /**
     */
    async listGroupedBillingStatements(requestParameters: ListGroupedBillingStatementsRequest, initOverrides?: RequestInit): Promise<Array<GroupedBillingStatement>> {
        const response = await this.listGroupedBillingStatementsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
