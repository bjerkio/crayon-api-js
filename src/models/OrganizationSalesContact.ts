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
 * @interface OrganizationSalesContact
 */
export interface OrganizationSalesContact {
  /**
   *
   * @type {string}
   * @memberof OrganizationSalesContact
   */
  fullName?: string | null;
  /**
   *
   * @type {string}
   * @memberof OrganizationSalesContact
   */
  email?: string | null;
  /**
   *
   * @type {string}
   * @memberof OrganizationSalesContact
   */
  phone?: string | null;
}

export function OrganizationSalesContactFromJSON(
  json: any,
): OrganizationSalesContact {
  return OrganizationSalesContactFromJSONTyped(json, false);
}

export function OrganizationSalesContactFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OrganizationSalesContact {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    fullName: !exists(json, 'fullName') ? undefined : json['fullName'],
    email: !exists(json, 'email') ? undefined : json['email'],
    phone: !exists(json, 'phone') ? undefined : json['phone'],
  };
}

export function OrganizationSalesContactToJSON(
  value?: OrganizationSalesContact | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    fullName: value.fullName,
    email: value.email,
    phone: value.phone,
  };
}