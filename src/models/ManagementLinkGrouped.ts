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
import {
    ObjectReference,
    ObjectReferenceFromJSON,
    ObjectReferenceFromJSONTyped,
    ObjectReferenceToJSON,
} from './';

/**
 * 
 * @export
 * @interface ManagementLinkGrouped
 */
export interface ManagementLinkGrouped {
    /**
     * 
     * @type {string}
     * @memberof ManagementLinkGrouped
     */
    link?: string | null;
    /**
     * 
     * @type {ObjectReference}
     * @memberof ManagementLinkGrouped
     */
    resellerCustomer?: ObjectReference;
    /**
     * 
     * @type {string}
     * @memberof ManagementLinkGrouped
     */
    text?: string | null;
}

export function ManagementLinkGroupedFromJSON(json: any): ManagementLinkGrouped {
    return ManagementLinkGroupedFromJSONTyped(json, false);
}

export function ManagementLinkGroupedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManagementLinkGrouped {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'resellerCustomer': !exists(json, 'resellerCustomer') ? undefined : ObjectReferenceFromJSON(json['resellerCustomer']),
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function ManagementLinkGroupedToJSON(value?: ManagementLinkGrouped | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link': value.link,
        'resellerCustomer': ObjectReferenceToJSON(value.resellerCustomer),
        'text': value.text,
    };
}

