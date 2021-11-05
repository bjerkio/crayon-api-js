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
    Me,
    MeFromJSON,
    MeToJSON,
} from '../models';

/**
 * 
 */
export class MeApi extends runtime.BaseAPI {

    /**
     */
    async apiV1MeGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Me>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/Me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MeFromJSON(jsonValue));
    }

    /**
     */
    async apiV1MeGet(initOverrides?: RequestInit): Promise<Me> {
        const response = await this.apiV1MeGetRaw(initOverrides);
        return await response.value();
    }

}
