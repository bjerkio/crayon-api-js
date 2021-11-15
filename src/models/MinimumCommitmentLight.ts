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
 * @interface MinimumCommitmentLight
 */
export interface MinimumCommitmentLight {
  /**
   *
   * @type {number}
   * @memberof MinimumCommitmentLight
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof MinimumCommitmentLight
   */
  months?: number;
  /**
   *
   * @type {string}
   * @memberof MinimumCommitmentLight
   */
  name?: string | null;
}

export function MinimumCommitmentLightFromJSON(
  json: any,
): MinimumCommitmentLight {
  return MinimumCommitmentLightFromJSONTyped(json, false);
}

export function MinimumCommitmentLightFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MinimumCommitmentLight {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    months: !exists(json, 'months') ? undefined : json['months'],
    name: !exists(json, 'name') ? undefined : json['name'],
  };
}

export function MinimumCommitmentLightToJSON(
  value?: MinimumCommitmentLight | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    months: value.months,
    name: value.name,
  };
}