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
export enum EntityStatus {
  NUMBER_0 = 0,
  NUMBER_1 = 1,
}

export function EntityStatusFromJSON(json: any): EntityStatus {
  return EntityStatusFromJSONTyped(json, false);
}

export function EntityStatusFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EntityStatus {
  return json as EntityStatus;
}

export function EntityStatusToJSON(value?: EntityStatus | null): any {
  return value as any;
}
