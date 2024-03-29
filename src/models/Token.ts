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
 * @interface Token
 */
export interface Token {
  /**
   *
   * @type {string}
   * @memberof Token
   */
  accessToken?: string | null;
  /**
   *
   * @type {string}
   * @memberof Token
   */
  identityToken?: string | null;
  /**
   *
   * @type {string}
   * @memberof Token
   */
  error?: string | null;
  /**
   *
   * @type {number}
   * @memberof Token
   */
  expiresIn?: number;
  /**
   *
   * @type {string}
   * @memberof Token
   */
  tokenType?: string | null;
  /**
   *
   * @type {string}
   * @memberof Token
   */
  refreshToken?: string | null;
}

export function TokenFromJSON(json: any): Token {
  return TokenFromJSONTyped(json, false);
}

export function TokenFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Token {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    accessToken: !exists(json, 'accessToken') ? undefined : json['accessToken'],
    identityToken: !exists(json, 'identityToken')
      ? undefined
      : json['identityToken'],
    error: !exists(json, 'error') ? undefined : json['error'],
    expiresIn: !exists(json, 'expiresIn') ? undefined : json['expiresIn'],
    tokenType: !exists(json, 'tokenType') ? undefined : json['tokenType'],
    refreshToken: !exists(json, 'refreshToken')
      ? undefined
      : json['refreshToken'],
  };
}

export function TokenToJSON(value?: Token | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    accessToken: value.accessToken,
    identityToken: value.identityToken,
    error: value.error,
    expiresIn: value.expiresIn,
    tokenType: value.tokenType,
    refreshToken: value.refreshToken,
  };
}
