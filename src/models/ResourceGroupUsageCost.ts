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
 * @interface ResourceGroupUsageCost
 */
export interface ResourceGroupUsageCost {
  /**
   *
   * @type {string}
   * @memberof ResourceGroupUsageCost
   */
  category?: string | null;
  /**
   *
   * @type {string}
   * @memberof ResourceGroupUsageCost
   */
  subcategory?: string | null;
  /**
   *
   * @type {string}
   * @memberof ResourceGroupUsageCost
   */
  meter?: string | null;
  /**
   *
   * @type {number}
   * @memberof ResourceGroupUsageCost
   */
  amount?: number | null;
  /**
   *
   * @type {string}
   * @memberof ResourceGroupUsageCost
   */
  currencyCode?: string | null;
}

export function ResourceGroupUsageCostFromJSON(
  json: any,
): ResourceGroupUsageCost {
  return ResourceGroupUsageCostFromJSONTyped(json, false);
}

export function ResourceGroupUsageCostFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResourceGroupUsageCost {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    category: !exists(json, 'category') ? undefined : json['category'],
    subcategory: !exists(json, 'subcategory') ? undefined : json['subcategory'],
    meter: !exists(json, 'meter') ? undefined : json['meter'],
    amount: !exists(json, 'amount') ? undefined : json['amount'],
    currencyCode: !exists(json, 'currencyCode')
      ? undefined
      : json['currencyCode'],
  };
}

export function ResourceGroupUsageCostToJSON(
  value?: ResourceGroupUsageCost | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    category: value.category,
    subcategory: value.subcategory,
    meter: value.meter,
    amount: value.amount,
    currencyCode: value.currencyCode,
  };
}
