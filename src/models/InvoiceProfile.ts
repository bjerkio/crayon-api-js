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
    AddressData,
    AddressDataFromJSON,
    AddressDataFromJSONTyped,
    AddressDataToJSON,
    ObjectReference,
    ObjectReferenceFromJSON,
    ObjectReferenceFromJSONTyped,
    ObjectReferenceToJSON,
} from './';

/**
 * 
 * @export
 * @interface InvoiceProfile
 */
export interface InvoiceProfile {
    /**
     * 
     * @type {number}
     * @memberof InvoiceProfile
     */
    id?: number;
    /**
     * 
     * @type {ObjectReference}
     * @memberof InvoiceProfile
     */
    organization?: ObjectReference;
    /**
     * 
     * @type {string}
     * @memberof InvoiceProfile
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceProfile
     */
    invoiceReference?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceProfile
     */
    customerReference?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InvoiceProfile
     */
    requisitionNumber?: string | null;
    /**
     * 
     * @type {number}
     * @memberof InvoiceProfile
     */
    invoiceAddressId?: number;
    /**
     * 
     * @type {number}
     * @memberof InvoiceProfile
     */
    deliveryAddressId?: number | null;
    /**
     * 
     * @type {AddressData}
     * @memberof InvoiceProfile
     */
    deliveryAddress?: AddressData;
    /**
     * 
     * @type {AddressData}
     * @memberof InvoiceProfile
     */
    invoiceAddress?: AddressData;
    /**
     * 
     * @type {number}
     * @memberof InvoiceProfile
     */
    consumerId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof InvoiceProfile
     */
    contactPersonId?: number | null;
}

export function InvoiceProfileFromJSON(json: any): InvoiceProfile {
    return InvoiceProfileFromJSONTyped(json, false);
}

export function InvoiceProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'organization': !exists(json, 'organization') ? undefined : ObjectReferenceFromJSON(json['organization']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'invoiceReference': !exists(json, 'invoiceReference') ? undefined : json['invoiceReference'],
        'customerReference': !exists(json, 'customerReference') ? undefined : json['customerReference'],
        'requisitionNumber': !exists(json, 'requisitionNumber') ? undefined : json['requisitionNumber'],
        'invoiceAddressId': !exists(json, 'invoiceAddressId') ? undefined : json['invoiceAddressId'],
        'deliveryAddressId': !exists(json, 'deliveryAddressId') ? undefined : json['deliveryAddressId'],
        'deliveryAddress': !exists(json, 'deliveryAddress') ? undefined : AddressDataFromJSON(json['deliveryAddress']),
        'invoiceAddress': !exists(json, 'invoiceAddress') ? undefined : AddressDataFromJSON(json['invoiceAddress']),
        'consumerId': !exists(json, 'consumerId') ? undefined : json['consumerId'],
        'contactPersonId': !exists(json, 'contactPersonId') ? undefined : json['contactPersonId'],
    };
}

export function InvoiceProfileToJSON(value?: InvoiceProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'organization': ObjectReferenceToJSON(value.organization),
        'name': value.name,
        'invoiceReference': value.invoiceReference,
        'customerReference': value.customerReference,
        'requisitionNumber': value.requisitionNumber,
        'invoiceAddressId': value.invoiceAddressId,
        'deliveryAddressId': value.deliveryAddressId,
        'deliveryAddress': AddressDataToJSON(value.deliveryAddress),
        'invoiceAddress': AddressDataToJSON(value.invoiceAddress),
        'consumerId': value.consumerId,
        'contactPersonId': value.contactPersonId,
    };
}

