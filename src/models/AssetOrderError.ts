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
 * @interface AssetOrderError
 */
export interface AssetOrderError {
  /**
   *
   * @type {string}
   * @memberof AssetOrderError
   */
  orderGroupId?: string | null;
  /**
   *
   * @type {number}
   * @memberof AssetOrderError
   */
  code?: number;
  /**
   *
   * @type {string}
   * @memberof AssetOrderError
   */
  description?: string | null;
}

export function AssetOrderErrorFromJSON(json: any): AssetOrderError {
  return AssetOrderErrorFromJSONTyped(json, false);
}

export function AssetOrderErrorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetOrderError {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    orderGroupId: !exists(json, 'orderGroupId')
      ? undefined
      : json['orderGroupId'],
    code: !exists(json, 'code') ? undefined : json['code'],
    description: !exists(json, 'description') ? undefined : json['description'],
  };
}

export function AssetOrderErrorToJSON(value?: AssetOrderError | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    orderGroupId: value.orderGroupId,
    code: value.code,
    description: value.description,
  };
}
