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
 * @interface ProductInformation
 */
export interface ProductInformation {
  /**
   *
   * @type {number}
   * @memberof ProductInformation
   */
  externalProductId?: number;
  /**
   *
   * @type {string}
   * @memberof ProductInformation
   */
  cultureCode?: string | null;
  /**
   *
   * @type {string}
   * @memberof ProductInformation
   */
  description?: string | null;
  /**
   *
   * @type {string}
   * @memberof ProductInformation
   */
  learnMoreLink?: string | null;
}

export function ProductInformationFromJSON(json: any): ProductInformation {
  return ProductInformationFromJSONTyped(json, false);
}

export function ProductInformationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductInformation {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    externalProductId: !exists(json, 'externalProductId')
      ? undefined
      : json['externalProductId'],
    cultureCode: !exists(json, 'cultureCode') ? undefined : json['cultureCode'],
    description: !exists(json, 'description') ? undefined : json['description'],
    learnMoreLink: !exists(json, 'learnMoreLink')
      ? undefined
      : json['learnMoreLink'],
  };
}

export function ProductInformationToJSON(
  value?: ProductInformation | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    externalProductId: value.externalProductId,
    cultureCode: value.cultureCode,
    description: value.description,
    learnMoreLink: value.learnMoreLink,
  };
}
