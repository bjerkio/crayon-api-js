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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AssetOrderLineError
 */
export interface AssetOrderLineError {
    /**
     * 
     * @type {string}
     * @memberof AssetOrderLineError
     */
    reasonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AssetOrderLineError
     */
    description?: string | null;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AssetOrderLineError
     */
    properties?: { [key: string]: string; } | null;
}

export function AssetOrderLineErrorFromJSON(json: any): AssetOrderLineError {
    return AssetOrderLineErrorFromJSONTyped(json, false);
}

export function AssetOrderLineErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetOrderLineError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
    };
}

export function AssetOrderLineErrorToJSON(value?: AssetOrderLineError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reasonCode': value.reasonCode,
        'description': value.description,
        'properties': value.properties,
    };
}
