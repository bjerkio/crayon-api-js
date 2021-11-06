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

export interface PublishersGetRequest {
    names?: Array<string> | null;
    page?: number;
    pageSize?: number;
    search?: string | null;
    programType?: ProgramType;
}

export interface PublishersIdGetRequest {
    id: number;
}

/**
 * 
 */
export class PublishersApi extends runtime.BaseAPI {

    /**
     */
    async publishersGetRaw(requestParameters: PublishersGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Publisher>>> {
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
            path: `/Publishers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PublisherFromJSON));
    }

    /**
     */
    async publishersGet(requestParameters: PublishersGetRequest, initOverrides?: RequestInit): Promise<Array<Publisher>> {
        const response = await this.publishersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async publishersIdGetRaw(requestParameters: PublishersIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Publisher>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling publishersIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Publishers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PublisherFromJSON(jsonValue));
    }

    /**
     */
    async publishersIdGet(requestParameters: PublishersIdGetRequest, initOverrides?: RequestInit): Promise<Publisher> {
        const response = await this.publishersIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
