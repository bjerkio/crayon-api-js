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
export enum AssetType {
  NUMBER_1 = 1,
  NUMBER_2 = 2,
  NUMBER_3 = 3,
}

export function AssetTypeFromJSON(json: any): AssetType {
  return AssetTypeFromJSONTyped(json, false);
}

export function AssetTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetType {
  return json as AssetType;
}

export function AssetTypeToJSON(value?: AssetType | null): any {
  return value as any;
}
