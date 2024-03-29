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
 * @interface UserProfile
 */
export interface UserProfile {
  /**
   *
   * @type {string}
   * @memberof UserProfile
   */
  id?: string | null;
  /**
   *
   * @type {string}
   * @memberof UserProfile
   */
  userName?: string | null;
  /**
   *
   * @type {string}
   * @memberof UserProfile
   */
  email?: string | null;
  /**
   *
   * @type {string}
   * @memberof UserProfile
   */
  firstName?: string | null;
  /**
   *
   * @type {string}
   * @memberof UserProfile
   */
  lastName?: string | null;
}

export function UserProfileFromJSON(json: any): UserProfile {
  return UserProfileFromJSONTyped(json, false);
}

export function UserProfileFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UserProfile {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    userName: !exists(json, 'userName') ? undefined : json['userName'],
    email: !exists(json, 'email') ? undefined : json['email'],
    firstName: !exists(json, 'firstName') ? undefined : json['firstName'],
    lastName: !exists(json, 'lastName') ? undefined : json['lastName'],
  };
}

export function UserProfileToJSON(value?: UserProfile | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    userName: value.userName,
    email: value.email,
    firstName: value.firstName,
    lastName: value.lastName,
  };
}
