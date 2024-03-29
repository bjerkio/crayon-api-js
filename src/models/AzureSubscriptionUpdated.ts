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
 * @interface AzureSubscriptionUpdated
 */
export interface AzureSubscriptionUpdated {
  /**
   *
   * @type {string}
   * @memberof AzureSubscriptionUpdated
   */
  azureSubscriptionId?: string | null;
}

export function AzureSubscriptionUpdatedFromJSON(
  json: any,
): AzureSubscriptionUpdated {
  return AzureSubscriptionUpdatedFromJSONTyped(json, false);
}

export function AzureSubscriptionUpdatedFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AzureSubscriptionUpdated {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    azureSubscriptionId: !exists(json, 'azureSubscriptionId')
      ? undefined
      : json['azureSubscriptionId'],
  };
}

export function AzureSubscriptionUpdatedToJSON(
  value?: AzureSubscriptionUpdated | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    azureSubscriptionId: value.azureSubscriptionId,
  };
}
