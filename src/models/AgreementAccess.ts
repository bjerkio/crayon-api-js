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
    Agreement,
    AgreementFromJSON,
    AgreementFromJSONTyped,
    AgreementToJSON,
} from './';

/**
 * 
 * @export
 * @interface AgreementAccess
 */
export interface AgreementAccess {
    /**
     * 
     * @type {boolean}
     * @memberof AgreementAccess
     */
    hasAccess?: boolean;
    /**
     * 
     * @type {Agreement}
     * @memberof AgreementAccess
     */
    agreement?: Agreement;
}

export function AgreementAccessFromJSON(json: any): AgreementAccess {
    return AgreementAccessFromJSONTyped(json, false);
}

export function AgreementAccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgreementAccess {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasAccess': !exists(json, 'hasAccess') ? undefined : json['hasAccess'],
        'agreement': !exists(json, 'agreement') ? undefined : AgreementFromJSON(json['agreement']),
    };
}

export function AgreementAccessToJSON(value?: AgreementAccess | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasAccess': value.hasAccess,
        'agreement': AgreementToJSON(value.agreement),
    };
}

