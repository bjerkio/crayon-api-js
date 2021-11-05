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
    ActivityLogItem,
    ActivityLogItemFromJSON,
    ActivityLogItemToJSON,
} from '../models';

export interface ApiV1ActivityLogsGetRequest {
    entity?: string | null;
    id?: number;
    ids?: Array<number> | null;
    searchDate?: Date | null;
    from?: Date | null;
    to?: Date | null;
    page?: number;
    pageSize?: number;
}

/**
 * 
 */
export class ActivityLogsApi extends runtime.BaseAPI {

    /**
     */
    async apiV1ActivityLogsGetRaw(requestParameters: ApiV1ActivityLogsGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ActivityLogItem>>> {
        const queryParameters: any = {};

        if (requestParameters.entity !== undefined) {
            queryParameters['Entity'] = requestParameters.entity;
        }

        if (requestParameters.id !== undefined) {
            queryParameters['Id'] = requestParameters.id;
        }

        if (requestParameters.ids) {
            queryParameters['Ids'] = requestParameters.ids;
        }

        if (requestParameters.searchDate !== undefined) {
            queryParameters['SearchDate'] = (requestParameters.searchDate as any).toISOString();
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
            path: `/api/v1/ActivityLogs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ActivityLogItemFromJSON));
    }

    /**
     */
    async apiV1ActivityLogsGet(requestParameters: ApiV1ActivityLogsGetRequest, initOverrides?: RequestInit): Promise<Array<ActivityLogItem>> {
        const response = await this.apiV1ActivityLogsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}