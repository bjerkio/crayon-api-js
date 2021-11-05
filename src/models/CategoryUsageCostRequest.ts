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
 * @interface CategoryUsageCostRequest
 */
export interface CategoryUsageCostRequest {
    /**
     * 
     * @type {number}
     * @memberof CategoryUsageCostRequest
     */
    resellerCustomerId?: number;
    /**
     * 
     * @type {string}
     * @memberof CategoryUsageCostRequest
     */
    subscriptionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CategoryUsageCostRequest
     */
    category?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CategoryUsageCostRequest
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CategoryUsageCostRequest
     */
    from?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CategoryUsageCostRequest
     */
    to?: Date;
}

export function CategoryUsageCostRequestFromJSON(json: any): CategoryUsageCostRequest {
    return CategoryUsageCostRequestFromJSONTyped(json, false);
}

export function CategoryUsageCostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryUsageCostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resellerCustomerId': !exists(json, 'resellerCustomerId') ? undefined : json['resellerCustomerId'],
        'subscriptionId': !exists(json, 'subscriptionId') ? undefined : json['subscriptionId'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'from': !exists(json, 'from') ? undefined : (new Date(json['from'])),
        'to': !exists(json, 'to') ? undefined : (new Date(json['to'])),
    };
}

export function CategoryUsageCostRequestToJSON(value?: CategoryUsageCostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resellerCustomerId': value.resellerCustomerId,
        'subscriptionId': value.subscriptionId,
        'category': value.category,
        'currencyCode': value.currencyCode,
        'from': value.from === undefined ? undefined : (value.from.toISOString()),
        'to': value.to === undefined ? undefined : (value.to.toISOString()),
    };
}

