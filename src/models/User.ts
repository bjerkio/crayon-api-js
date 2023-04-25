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
 * @interface User
 */
export interface User {
  /**
   *
   * @type {string}
   * @memberof User
   */
  id?: string | null;
  /**
   *
   * @type {string}
   * @memberof User
   */
  userName?: string | null;
  /**
   *
   * @type {string}
   * @memberof User
   */
  firstName?: string | null;
  /**
   *
   * @type {string}
   * @memberof User
   */
  lastName?: string | null;
  /**
   *
   * @type {string}
   * @memberof User
   */
  email?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof User
   */
  emailConfirmed?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof User
   */
  lockoutEnabled?: boolean;
  /**
   *
   * @type {Date}
   * @memberof User
   */
  lockoutEnd?: Date | null;
  /**
   *
   * @type {string}
   * @memberof User
   */
  phoneNumber?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof User
   */
  phoneNumberConfirmed?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof User
   */
  twoFactorEnabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof User
   */
  tenantAdmin?: boolean;
}

export function UserFromJSON(json: any): User {
  return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): User {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    userName: !exists(json, 'userName') ? undefined : json['userName'],
    firstName: !exists(json, 'firstName') ? undefined : json['firstName'],
    lastName: !exists(json, 'lastName') ? undefined : json['lastName'],
    email: !exists(json, 'email') ? undefined : json['email'],
    emailConfirmed: !exists(json, 'emailConfirmed')
      ? undefined
      : json['emailConfirmed'],
    lockoutEnabled: !exists(json, 'lockoutEnabled')
      ? undefined
      : json['lockoutEnabled'],
    lockoutEnd: !exists(json, 'lockoutEnd')
      ? undefined
      : json['lockoutEnd'] === null
      ? null
      : new Date(json['lockoutEnd']),
    phoneNumber: !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
    phoneNumberConfirmed: !exists(json, 'phoneNumberConfirmed')
      ? undefined
      : json['phoneNumberConfirmed'],
    twoFactorEnabled: !exists(json, 'twoFactorEnabled')
      ? undefined
      : json['twoFactorEnabled'],
    tenantAdmin: !exists(json, 'tenantAdmin') ? undefined : json['tenantAdmin'],
  };
}

export function UserToJSON(value?: User | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    userName: value.userName,
    firstName: value.firstName,
    lastName: value.lastName,
    email: value.email,
    emailConfirmed: value.emailConfirmed,
    lockoutEnabled: value.lockoutEnabled,
    lockoutEnd:
      value.lockoutEnd === undefined
        ? undefined
        : value.lockoutEnd === null
        ? null
        : value.lockoutEnd.toISOString(),
    phoneNumber: value.phoneNumber,
    phoneNumberConfirmed: value.phoneNumberConfirmed,
    twoFactorEnabled: value.twoFactorEnabled,
    tenantAdmin: value.tenantAdmin,
  };
}