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
 * @interface CustomerTenantContact
 */
export interface CustomerTenantContact {
    /**
     * 
     * @type {string}
     * @memberof CustomerTenantContact
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerTenantContact
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerTenantContact
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerTenantContact
     */
    phoneNumber?: string | null;
}

export function CustomerTenantContactFromJSON(json: any): CustomerTenantContact {
    return CustomerTenantContactFromJSONTyped(json, false);
}

export function CustomerTenantContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerTenantContact {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
    };
}

export function CustomerTenantContactToJSON(value?: CustomerTenantContact | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
        'phoneNumber': value.phoneNumber,
    };
}

