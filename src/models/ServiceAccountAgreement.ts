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
 * @interface ServiceAccountAgreement
 */
export interface ServiceAccountAgreement {
  /**
   *
   * @type {string}
   * @memberof ServiceAccountAgreement
   */
  firstName?: string | null;
  /**
   *
   * @type {string}
   * @memberof ServiceAccountAgreement
   */
  lastName?: string | null;
  /**
   *
   * @type {string}
   * @memberof ServiceAccountAgreement
   */
  phoneNumber?: string | null;
  /**
   *
   * @type {string}
   * @memberof ServiceAccountAgreement
   */
  email?: string | null;
  /**
   *
   * @type {Date}
   * @memberof ServiceAccountAgreement
   */
  dateAgreed?: Date;
  /**
   *
   * @type {AgreementTypeConsent}
   * @memberof ServiceAccountAgreement
   */
  agreementType?: AgreementTypeConsent;
}

export function ServiceAccountAgreementFromJSON(
  json: any,
): ServiceAccountAgreement {
  return ServiceAccountAgreementFromJSONTyped(json, false);
}

export function ServiceAccountAgreementFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ServiceAccountAgreement {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    firstName: !exists(json, 'firstName') ? undefined : json['firstName'],
    lastName: !exists(json, 'lastName') ? undefined : json['lastName'],
    phoneNumber: !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
    email: !exists(json, 'email') ? undefined : json['email'],
    dateAgreed: !exists(json, 'dateAgreed')
      ? undefined
      : new Date(json['dateAgreed']),
    agreementType: !exists(json, 'agreementType')
      ? undefined
      : AgreementTypeConsentFromJSON(json['agreementType']),
  };
}

export function ServiceAccountAgreementToJSON(
  value?: ServiceAccountAgreement | null,
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
    dateAgreed:
      value.dateAgreed === undefined
        ? undefined
        : value.dateAgreed.toISOString(),
    agreementType: AgreementTypeConsentToJSON(value.agreementType),
  };
}
