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
    AgreementIdentityReferenceDto,
    AgreementIdentityReferenceDtoFromJSON,
    AgreementIdentityReferenceDtoFromJSONTyped,
    AgreementIdentityReferenceDtoToJSON,
    AgreementReportStatus,
    AgreementReportStatusFromJSON,
    AgreementReportStatusFromJSONTyped,
    AgreementReportStatusToJSON,
    ObjectReferenceDto,
    ObjectReferenceDtoFromJSON,
    ObjectReferenceDtoFromJSONTyped,
    ObjectReferenceDtoToJSON,
} from './';

/**
 * 
 * @export
 * @interface AgreementReport
 */
export interface AgreementReport {
    /**
     * 
     * @type {ObjectReferenceDto}
     * @memberof AgreementReport
     */
    productContainer?: ObjectReferenceDto;
    /**
     * 
     * @type {AgreementIdentityReferenceDto}
     * @memberof AgreementReport
     */
    agreement?: AgreementIdentityReferenceDto;
    /**
     * 
     * @type {AgreementReportStatus}
     * @memberof AgreementReport
     */
    status?: AgreementReportStatus;
    /**
     * 
     * @type {boolean}
     * @memberof AgreementReport
     */
    hasValidAgreementTerm?: boolean;
}

export function AgreementReportFromJSON(json: any): AgreementReport {
    return AgreementReportFromJSONTyped(json, false);
}

export function AgreementReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgreementReport {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productContainer': !exists(json, 'productContainer') ? undefined : ObjectReferenceDtoFromJSON(json['productContainer']),
        'agreement': !exists(json, 'agreement') ? undefined : AgreementIdentityReferenceDtoFromJSON(json['agreement']),
        'status': !exists(json, 'status') ? undefined : AgreementReportStatusFromJSON(json['status']),
        'hasValidAgreementTerm': !exists(json, 'hasValidAgreementTerm') ? undefined : json['hasValidAgreementTerm'],
    };
}

export function AgreementReportToJSON(value?: AgreementReport | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productContainer': ObjectReferenceDtoToJSON(value.productContainer),
        'agreement': AgreementIdentityReferenceDtoToJSON(value.agreement),
        'status': AgreementReportStatusToJSON(value.status),
        'hasValidAgreementTerm': value.hasValidAgreementTerm,
    };
}
