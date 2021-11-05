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
 * @interface AzureSubscriptionRename
 */
export interface AzureSubscriptionRename {
    /**
     * 
     * @type {number}
     * @memberof AzureSubscriptionRename
     */
    azurePlanId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AzureSubscriptionRename
     */
    azureSubscriptionId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AzureSubscriptionRename
     */
    name?: string | null;
}

export function AzureSubscriptionRenameFromJSON(json: any): AzureSubscriptionRename {
    return AzureSubscriptionRenameFromJSONTyped(json, false);
}

export function AzureSubscriptionRenameFromJSONTyped(json: any, ignoreDiscriminator: boolean): AzureSubscriptionRename {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'azurePlanId': !exists(json, 'azurePlanId') ? undefined : json['azurePlanId'],
        'azureSubscriptionId': !exists(json, 'azureSubscriptionId') ? undefined : json['azureSubscriptionId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function AzureSubscriptionRenameToJSON(value?: AzureSubscriptionRename | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'azurePlanId': value.azurePlanId,
        'azureSubscriptionId': value.azureSubscriptionId,
        'name': value.name,
    };
}

