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
  BillingCycleEnum,
  BillingCycleEnumFromJSON,
  BillingCycleEnumFromJSONTyped,
  BillingCycleEnumToJSON,
} from './';

/**
 *
 * @export
 * @interface SubscriptionTransitionResponse
 */
export interface SubscriptionTransitionResponse {
  /**
   *
   * @type {string}
   * @memberof SubscriptionTransitionResponse
   */
  fromCatalogItemId?: string | null;
  /**
   *
   * @type {string}
   * @memberof SubscriptionTransitionResponse
   */
  toCatalogItemId?: string | null;
  /**
   *
   * @type {number}
   * @memberof SubscriptionTransitionResponse
   */
  quantity?: number;
  /**
   *
   * @type {string}
   * @memberof SubscriptionTransitionResponse
   */
  transitionType?: string | null;
  /**
   *
   * @type {BillingCycleEnum}
   * @memberof SubscriptionTransitionResponse
   */
  billingCycle?: BillingCycleEnum;
  /**
   *
   * @type {string}
   * @memberof SubscriptionTransitionResponse
   */
  term?: string | null;
}

export function SubscriptionTransitionResponseFromJSON(
  json: any,
): SubscriptionTransitionResponse {
  return SubscriptionTransitionResponseFromJSONTyped(json, false);
}

export function SubscriptionTransitionResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SubscriptionTransitionResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    fromCatalogItemId: !exists(json, 'fromCatalogItemId')
      ? undefined
      : json['fromCatalogItemId'],
    toCatalogItemId: !exists(json, 'toCatalogItemId')
      ? undefined
      : json['toCatalogItemId'],
    quantity: !exists(json, 'quantity') ? undefined : json['quantity'],
    transitionType: !exists(json, 'transitionType')
      ? undefined
      : json['transitionType'],
    billingCycle: !exists(json, 'billingCycle')
      ? undefined
      : BillingCycleEnumFromJSON(json['billingCycle']),
    term: !exists(json, 'term') ? undefined : json['term'],
  };
}

export function SubscriptionTransitionResponseToJSON(
  value?: SubscriptionTransitionResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    fromCatalogItemId: value.fromCatalogItemId,
    toCatalogItemId: value.toCatalogItemId,
    quantity: value.quantity,
    transitionType: value.transitionType,
    billingCycle: BillingCycleEnumToJSON(value.billingCycle),
    term: value.term,
  };
}
