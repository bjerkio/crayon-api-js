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
 * @interface OrganizationUsageCost
 */
export interface OrganizationUsageCost {
  /**
   *
   * @type {string}
   * @memberof OrganizationUsageCost
   */
  supplier?: string | null;
  /**
   *
   * @type {number}
   * @memberof OrganizationUsageCost
   */
  accountId?: number;
  /**
   *
   * @type {string}
   * @memberof OrganizationUsageCost
   */
  accountName?: string | null;
  /**
   *
   * @type {string}
   * @memberof OrganizationUsageCost
   */
  subscriptionName?: string | null;
  /**
   *
   * @type {string}
   * @memberof OrganizationUsageCost
   */
  subscriptionId?: string | null;
  /**
   *
   * @type {number}
   * @memberof OrganizationUsageCost
   */
  amount?: number | null;
  /**
   *
   * @type {string}
   * @memberof OrganizationUsageCost
   */
  currencyCode?: string | null;
}

export function OrganizationUsageCostFromJSON(
  json: any,
): OrganizationUsageCost {
  return OrganizationUsageCostFromJSONTyped(json, false);
}

export function OrganizationUsageCostFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OrganizationUsageCost {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    supplier: !exists(json, 'supplier') ? undefined : json['supplier'],
    accountId: !exists(json, 'accountId') ? undefined : json['accountId'],
    accountName: !exists(json, 'accountName') ? undefined : json['accountName'],
    subscriptionName: !exists(json, 'subscriptionName')
      ? undefined
      : json['subscriptionName'],
    subscriptionId: !exists(json, 'subscriptionId')
      ? undefined
      : json['subscriptionId'],
    amount: !exists(json, 'amount') ? undefined : json['amount'],
    currencyCode: !exists(json, 'currencyCode')
      ? undefined
      : json['currencyCode'],
  };
}

export function OrganizationUsageCostToJSON(
  value?: OrganizationUsageCost | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    supplier: value.supplier,
    accountId: value.accountId,
    accountName: value.accountName,
    subscriptionName: value.subscriptionName,
    subscriptionId: value.subscriptionId,
    amount: value.amount,
    currencyCode: value.currencyCode,
  };
}
