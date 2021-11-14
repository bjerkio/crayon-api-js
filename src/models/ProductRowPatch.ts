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
import {
  ObjectReference,
  ObjectReferenceFromJSON,
  ObjectReferenceFromJSONTyped,
  ObjectReferenceToJSON,
} from './';

/**
 *
 * @export
 * @interface ProductRowPatch
 */
export interface ProductRowPatch {
  /**
   *
   * @type {number}
   * @memberof ProductRowPatch
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof ProductRowPatch
   */
  quantity?: number | null;
  /**
   *
   * @type {string}
   * @memberof ProductRowPatch
   */
  comment?: string | null;
  /**
   *
   * @type {string}
   * @memberof ProductRowPatch
   */
  usageCountryCode?: string | null;
  /**
   *
   * @type {string}
   * @memberof ProductRowPatch
   */
  userId?: string | null;
  /**
   *
   * @type {ObjectReference}
   * @memberof ProductRowPatch
   */
  agreement?: ObjectReference;
  /**
   *
   * @type {ObjectReference}
   * @memberof ProductRowPatch
   */
  productVariant?: ObjectReference;
  /**
   *
   * @type {ObjectReference}
   * @memberof ProductRowPatch
   */
  grouping?: ObjectReference;
}

export function ProductRowPatchFromJSON(json: any): ProductRowPatch {
  return ProductRowPatchFromJSONTyped(json, false);
}

export function ProductRowPatchFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductRowPatch {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    quantity: !exists(json, 'quantity') ? undefined : json['quantity'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    usageCountryCode: !exists(json, 'usageCountryCode')
      ? undefined
      : json['usageCountryCode'],
    userId: !exists(json, 'userId') ? undefined : json['userId'],
    agreement: !exists(json, 'agreement')
      ? undefined
      : ObjectReferenceFromJSON(json['agreement']),
    productVariant: !exists(json, 'productVariant')
      ? undefined
      : ObjectReferenceFromJSON(json['productVariant']),
    grouping: !exists(json, 'grouping')
      ? undefined
      : ObjectReferenceFromJSON(json['grouping']),
  };
}

export function ProductRowPatchToJSON(value?: ProductRowPatch | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    quantity: value.quantity,
    comment: value.comment,
    usageCountryCode: value.usageCountryCode,
    userId: value.userId,
    agreement: ObjectReferenceToJSON(value.agreement),
    productVariant: ObjectReferenceToJSON(value.productVariant),
    grouping: ObjectReferenceToJSON(value.grouping),
  };
}
