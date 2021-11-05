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
    Program,
    ProgramFromJSON,
    ProgramToJSON,
    ProgramType,
    ProgramTypeFromJSON,
    ProgramTypeToJSON,
} from '../models';

export interface ApiV1ProgramsGetRequest {
    publisherId?: number;
    programType?: ProgramType;
    page?: number;
    pageSize?: number;
    search?: string | null;
    organizationId?: number;
}

export interface ApiV1ProgramsIdGetRequest {
    id: number;
}

/**
 * 
 */
export class ProgramsApi extends runtime.BaseAPI {

    /**
     */
    async apiV1ProgramsGetRaw(requestParameters: ApiV1ProgramsGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Program>>> {
        const queryParameters: any = {};

        if (requestParameters.publisherId !== undefined) {
            queryParameters['PublisherId'] = requestParameters.publisherId;
        }

        if (requestParameters.programType !== undefined) {
            queryParameters['ProgramType'] = requestParameters.programType;
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

        if (requestParameters.organizationId !== undefined) {
            queryParameters['OrganizationId'] = requestParameters.organizationId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/Programs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProgramFromJSON));
    }

    /**
     */
    async apiV1ProgramsGet(requestParameters: ApiV1ProgramsGetRequest, initOverrides?: RequestInit): Promise<Array<Program>> {
        const response = await this.apiV1ProgramsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1ProgramsIdGetRaw(requestParameters: ApiV1ProgramsIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Program>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiV1ProgramsIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/Programs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProgramFromJSON(jsonValue));
    }

    /**
     */
    async apiV1ProgramsIdGet(requestParameters: ApiV1ProgramsIdGetRequest, initOverrides?: RequestInit): Promise<Program> {
        const response = await this.apiV1ProgramsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}