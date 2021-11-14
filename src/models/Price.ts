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
 * @interface Price
 */
export interface Price {
  /**
   *
   * @type {number}
   * @memberof Price
   */
  value?: number;
  /**
   *
   * @type {string}
   * @memberof Price
   */
  currencyCode?: string | null;
}

export function PriceFromJSON(json: any): Price {
  return PriceFromJSONTyped(json, false);
}

export function PriceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Price {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    value: !exists(json, 'value') ? undefined : json['value'],
    currencyCode: !exists(json, 'currencyCode')
      ? undefined
      : json['currencyCode'],
  };
}

export function PriceToJSON(value?: Price | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    value: value.value,
    currencyCode: value.currencyCode,
  };
}
