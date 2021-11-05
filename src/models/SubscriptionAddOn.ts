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
    ProductReference,
    ProductReferenceFromJSON,
    ProductReferenceFromJSONTyped,
    ProductReferenceToJSON,
    SubscriptionStatus,
    SubscriptionStatusFromJSON,
    SubscriptionStatusFromJSONTyped,
    SubscriptionStatusToJSON,
    SubscriptionTags,
    SubscriptionTagsFromJSON,
    SubscriptionTagsFromJSONTyped,
    SubscriptionTagsToJSON,
} from './';

/**
 * 
 * @export
 * @interface SubscriptionAddOn
 */
export interface SubscriptionAddOn {
    /**
     * 
     * @type {number}
     * @memberof SubscriptionAddOn
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAddOn
     */
    publisherSubscriptionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAddOn
     */
    publisherCustomerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAddOn
     */
    name?: string | null;
    /**
     * 
     * @type {SubscriptionStatus}
     * @memberof SubscriptionAddOn
     */
    status?: SubscriptionStatus;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionAddOn
     */
    quantity?: number;
    /**
     * 
     * @type {ObjectReference}
     * @memberof SubscriptionAddOn
     */
    organization?: ObjectReference;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAddOn
     */
    orderId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionAddOn
     */
    creationDate?: Date;
    /**
     * 
     * @type {ProductReference}
     * @memberof SubscriptionAddOn
     */
    product?: ProductReference;
    /**
     * 
     * @type {ObjectReference}
     * @memberof SubscriptionAddOn
     */
    publisher?: ObjectReference;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionAddOn
     */
    markup?: number;
    /**
     * 
     * @type {SubscriptionTags}
     * @memberof SubscriptionAddOn
     */
    subscriptionTags?: SubscriptionTags;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAddOn
     */
    termDuration?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionAddOn
     */
    autoRenewEnabled?: boolean | null;
}

export function SubscriptionAddOnFromJSON(json: any): SubscriptionAddOn {
    return SubscriptionAddOnFromJSONTyped(json, false);
}

export function SubscriptionAddOnFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAddOn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'publisherSubscriptionId': !exists(json, 'publisherSubscriptionId') ? undefined : json['publisherSubscriptionId'],
        'publisherCustomerId': !exists(json, 'publisherCustomerId') ? undefined : json['publisherCustomerId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'status': !exists(json, 'status') ? undefined : SubscriptionStatusFromJSON(json['status']),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'organization': !exists(json, 'organization') ? undefined : ObjectReferenceFromJSON(json['organization']),
        'orderId': !exists(json, 'orderId') ? undefined : json['orderId'],
        'creationDate': !exists(json, 'creationDate') ? undefined : (new Date(json['creationDate'])),
        'product': !exists(json, 'product') ? undefined : ProductReferenceFromJSON(json['product']),
        'publisher': !exists(json, 'publisher') ? undefined : ObjectReferenceFromJSON(json['publisher']),
        'markup': !exists(json, 'markup') ? undefined : json['markup'],
        'subscriptionTags': !exists(json, 'subscriptionTags') ? undefined : SubscriptionTagsFromJSON(json['subscriptionTags']),
        'termDuration': !exists(json, 'termDuration') ? undefined : json['termDuration'],
        'autoRenewEnabled': !exists(json, 'autoRenewEnabled') ? undefined : json['autoRenewEnabled'],
    };
}

export function SubscriptionAddOnToJSON(value?: SubscriptionAddOn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'publisherSubscriptionId': value.publisherSubscriptionId,
        'publisherCustomerId': value.publisherCustomerId,
        'name': value.name,
        'status': SubscriptionStatusToJSON(value.status),
        'quantity': value.quantity,
        'organization': ObjectReferenceToJSON(value.organization),
        'orderId': value.orderId,
        'creationDate': value.creationDate === undefined ? undefined : (value.creationDate.toISOString()),
        'product': ProductReferenceToJSON(value.product),
        'publisher': ObjectReferenceToJSON(value.publisher),
        'markup': value.markup,
        'subscriptionTags': SubscriptionTagsToJSON(value.subscriptionTags),
        'termDuration': value.termDuration,
        'autoRenewEnabled': value.autoRenewEnabled,
    };
}

