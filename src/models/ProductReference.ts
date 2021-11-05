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
 * @interface ProductReference
 */
export interface ProductReference {
    /**
     * 
     * @type {number}
     * @memberof ProductReference
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductReference
     */
    partNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductReference
     */
    publisherProductId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductReference
     */
    itemLegalName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProductReference
     */
    itemName?: string | null;
}

export function ProductReferenceFromJSON(json: any): ProductReference {
    return ProductReferenceFromJSONTyped(json, false);
}

export function ProductReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'publisherProductId': !exists(json, 'publisherProductId') ? undefined : json['publisherProductId'],
        'itemLegalName': !exists(json, 'itemLegalName') ? undefined : json['itemLegalName'],
        'itemName': !exists(json, 'itemName') ? undefined : json['itemName'],
    };
}

export function ProductReferenceToJSON(value?: ProductReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'partNumber': value.partNumber,
        'publisherProductId': value.publisherProductId,
        'itemLegalName': value.itemLegalName,
        'itemName': value.itemName,
    };
}

