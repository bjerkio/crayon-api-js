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
 * @interface AzureSubscriptionTags
 */
export interface AzureSubscriptionTags {
  /**
   *
   * @type {string}
   * @memberof AzureSubscriptionTags
   */
  costCenter?: string | null;
  /**
   *
   * @type {string}
   * @memberof AzureSubscriptionTags
   */
  department?: string | null;
  /**
   *
   * @type {string}
   * @memberof AzureSubscriptionTags
   */
  project?: string | null;
  /**
   *
   * @type {string}
   * @memberof AzureSubscriptionTags
   */
  custom?: string | null;
  /**
   *
   * @type {string}
   * @memberof AzureSubscriptionTags
   */
  owner?: string | null;
}

export function AzureSubscriptionTagsFromJSON(
  json: any,
): AzureSubscriptionTags {
  return AzureSubscriptionTagsFromJSONTyped(json, false);
}

export function AzureSubscriptionTagsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AzureSubscriptionTags {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    costCenter: !exists(json, 'costCenter') ? undefined : json['costCenter'],
    department: !exists(json, 'department') ? undefined : json['department'],
    project: !exists(json, 'project') ? undefined : json['project'],
    custom: !exists(json, 'custom') ? undefined : json['custom'],
    owner: !exists(json, 'owner') ? undefined : json['owner'],
  };
}

export function AzureSubscriptionTagsToJSON(
  value?: AzureSubscriptionTags | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    costCenter: value.costCenter,
    department: value.department,
    project: value.project,
    custom: value.custom,
    owner: value.owner,
  };
}
