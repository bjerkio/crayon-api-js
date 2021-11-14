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
 * @interface ProductContainerCommentUser
 */
export interface ProductContainerCommentUser {
  /**
   *
   * @type {string}
   * @memberof ProductContainerCommentUser
   */
  id?: string | null;
  /**
   *
   * @type {string}
   * @memberof ProductContainerCommentUser
   */
  userName?: string | null;
  /**
   *
   * @type {string}
   * @memberof ProductContainerCommentUser
   */
  firstName?: string | null;
  /**
   *
   * @type {string}
   * @memberof ProductContainerCommentUser
   */
  lastName?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof ProductContainerCommentUser
   */
  crayonEmployee?: boolean;
}

export function ProductContainerCommentUserFromJSON(
  json: any,
): ProductContainerCommentUser {
  return ProductContainerCommentUserFromJSONTyped(json, false);
}

export function ProductContainerCommentUserFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductContainerCommentUser {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    userName: !exists(json, 'userName') ? undefined : json['userName'],
    firstName: !exists(json, 'firstName') ? undefined : json['firstName'],
    lastName: !exists(json, 'lastName') ? undefined : json['lastName'],
    crayonEmployee: !exists(json, 'crayonEmployee')
      ? undefined
      : json['crayonEmployee'],
  };
}

export function ProductContainerCommentUserToJSON(
  value?: ProductContainerCommentUser | null,
): any {
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
    crayonEmployee: value.crayonEmployee,
  };
}
