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
    ProgramType,
    ProgramTypeFromJSON,
    ProgramTypeToJSON,
    Publisher,
    PublisherFromJSON,
    PublisherToJSON,
} from '../models';

export interface ApiV1PublishersGetRequest {
    names?: Array<string> | null;
    page?: number;
    pageSize?: number;
    search?: string | null;
    programType?: ProgramType;
}

export interface ApiV1PublishersIdGetRequest {
    id: number;
}

/**
 * 
 */
export class PublishersApi extends runtime.BaseAPI {

    /**
     */
    async apiV1PublishersGetRaw(requestParameters: ApiV1PublishersGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Publisher>>> {
        const queryParameters: any = {};

        if (requestParameters.names) {
            queryParameters['Names'] = requestParameters.names;
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

        if (requestParameters.programType !== undefined) {
            queryParameters['ProgramType'] = requestParameters.programType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/Publishers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PublisherFromJSON));
    }

    /**
     */
    async apiV1PublishersGet(requestParameters: ApiV1PublishersGetRequest, initOverrides?: RequestInit): Promise<Array<Publisher>> {
        const response = await this.apiV1PublishersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV1PublishersIdGetRaw(requestParameters: ApiV1PublishersIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Publisher>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiV1PublishersIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/Publishers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PublisherFromJSON(jsonValue));
    }

    /**
     */
    async apiV1PublishersIdGet(requestParameters: ApiV1PublishersIdGetRequest, initOverrides?: RequestInit): Promise<Publisher> {
        const response = await this.apiV1PublishersIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}