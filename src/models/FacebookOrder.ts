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
 * @interface FacebookOrder
 */
export interface FacebookOrder {
  /**
   *
   * @type {string}
   * @memberof FacebookOrder
   */
  contactName?: string | null;
  /**
   *
   * @type {string}
   * @memberof FacebookOrder
   */
  contactEmail?: string | null;
  /**
   *
   * @type {string}
   * @memberof FacebookOrder
   */
  consumerContactName?: string | null;
  /**
   *
   * @type {string}
   * @memberof FacebookOrder
   */
  consumerFullLegalName?: string | null;
  /**
   *
   * @type {string}
   * @memberof FacebookOrder
   */
  consumerContactEmail?: string | null;
  /**
   *
   * @type {number}
   * @memberof FacebookOrder
   */
  organizationId?: number;
  /**
   *
   * @type {number}
   * @memberof FacebookOrder
   */
  invoiceProfileId?: number;
  /**
   *
   * @type {Date}
   * @memberof FacebookOrder
   */
  subscriptionStartDate?: Date;
  /**
   *
   * @type {string}
   * @memberof FacebookOrder
   */
  consumerSignupEmail?: string | null;
}

export function FacebookOrderFromJSON(json: any): FacebookOrder {
  return FacebookOrderFromJSONTyped(json, false);
}

export function FacebookOrderFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): FacebookOrder {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    contactName: !exists(json, 'contactName') ? undefined : json['contactName'],
    contactEmail: !exists(json, 'contactEmail')
      ? undefined
      : json['contactEmail'],
    consumerContactName: !exists(json, 'consumerContactName')
      ? undefined
      : json['consumerContactName'],
    consumerFullLegalName: !exists(json, 'consumerFullLegalName')
      ? undefined
      : json['consumerFullLegalName'],
    consumerContactEmail: !exists(json, 'consumerContactEmail')
      ? undefined
      : json['consumerContactEmail'],
    organizationId: !exists(json, 'organizationId')
      ? undefined
      : json['organizationId'],
    invoiceProfileId: !exists(json, 'invoiceProfileId')
      ? undefined
      : json['invoiceProfileId'],
    subscriptionStartDate: !exists(json, 'subscriptionStartDate')
      ? undefined
      : new Date(json['subscriptionStartDate']),
    consumerSignupEmail: !exists(json, 'consumerSignupEmail')
      ? undefined
      : json['consumerSignupEmail'],
  };
}

export function FacebookOrderToJSON(value?: FacebookOrder | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    contactName: value.contactName,
    contactEmail: value.contactEmail,
    consumerContactName: value.consumerContactName,
    consumerFullLegalName: value.consumerFullLegalName,
    consumerContactEmail: value.consumerContactEmail,
    organizationId: value.organizationId,
    invoiceProfileId: value.invoiceProfileId,
    subscriptionStartDate:
      value.subscriptionStartDate === undefined
        ? undefined
        : value.subscriptionStartDate.toISOString(),
    consumerSignupEmail: value.consumerSignupEmail,
  };
}
