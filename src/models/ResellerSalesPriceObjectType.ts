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

/**
 *
 * @export
 * @enum {string}
 */
export enum ResellerSalesPriceObjectType {
  NUMBER_1 = 1,
  NUMBER_2 = 2,
  NUMBER_3 = 3,
  NUMBER_4 = 4,
  NUMBER_5 = 5,
}

export function ResellerSalesPriceObjectTypeFromJSON(
  json: any,
): ResellerSalesPriceObjectType {
  return ResellerSalesPriceObjectTypeFromJSONTyped(json, false);
}

export function ResellerSalesPriceObjectTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResellerSalesPriceObjectType {
  return json as ResellerSalesPriceObjectType;
}

export function ResellerSalesPriceObjectTypeToJSON(
  value?: ResellerSalesPriceObjectType | null,
): any {
  return value as any;
}
