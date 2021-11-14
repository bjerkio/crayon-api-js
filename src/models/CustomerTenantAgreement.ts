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
  AgreementTypeConsent,
  AgreementTypeConsentFromJSON,
  AgreementTypeConsentFromJSONTyped,
  AgreementTypeConsentToJSON,
} from './';

/**
 *
 * @export
 * @interface CustomerTenantAgreement
 */
export interface CustomerTenantAgreement {
  /**
   *
   * @type {string}
   * @memberof CustomerTenantAgreement
   */
  firstName?: string | null;
  /**
   *
   * @type {string}
   * @memberof CustomerTenantAgreement
   */
  lastName?: string | null;
  /**
   *
   * @type {string}
   * @memberof CustomerTenantAgreement
   */
  phoneNumber?: string | null;
  /**
   *
   * @type {string}
   * @memberof CustomerTenantAgreement
   */
  email?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof CustomerTenantAgreement
   */
  sameAsPrimaryContact?: boolean;
  /**
   *
   * @type {Date}
   * @memberof CustomerTenantAgreement
   */
  dateAgreed?: Date | null;
  /**
   *
   * @type {boolean}
   * @memberof CustomerTenantAgreement
   */
  accepted?: boolean;
  /**
   *
   * @type {AgreementTypeConsent}
   * @memberof CustomerTenantAgreement
   */
  agreementType?: AgreementTypeConsent;
}

export function CustomerTenantAgreementFromJSON(
  json: any,
): CustomerTenantAgreement {
  return CustomerTenantAgreementFromJSONTyped(json, false);
}

export function CustomerTenantAgreementFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CustomerTenantAgreement {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    firstName: !exists(json, 'firstName') ? undefined : json['firstName'],
    lastName: !exists(json, 'lastName') ? undefined : json['lastName'],
    phoneNumber: !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
    email: !exists(json, 'email') ? undefined : json['email'],
    sameAsPrimaryContact: !exists(json, 'sameAsPrimaryContact')
      ? undefined
      : json['sameAsPrimaryContact'],
    dateAgreed: !exists(json, 'dateAgreed')
      ? undefined
      : json['dateAgreed'] === null
      ? null
      : new Date(json['dateAgreed']),
    accepted: !exists(json, 'accepted') ? undefined : json['accepted'],
    agreementType: !exists(json, 'agreementType')
      ? undefined
      : AgreementTypeConsentFromJSON(json['agreementType']),
  };
}

export function CustomerTenantAgreementToJSON(
  value?: CustomerTenantAgreement | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    firstName: value.firstName,
    lastName: value.lastName,
    phoneNumber: value.phoneNumber,
    email: value.email,
    sameAsPrimaryContact: value.sameAsPrimaryContact,
    dateAgreed:
      value.dateAgreed === undefined
        ? undefined
        : value.dateAgreed === null
        ? null
        : value.dateAgreed.toISOString(),
    accepted: value.accepted,
    agreementType: AgreementTypeConsentToJSON(value.agreementType),
  };
}
