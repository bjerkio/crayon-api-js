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
  SubscriptionTransitionError,
  SubscriptionTransitionErrorFromJSON,
  SubscriptionTransitionErrorFromJSONTyped,
  SubscriptionTransitionErrorToJSON,
} from './';

/**
 *
 * @export
 * @interface SubscriptionTransitionEligibilityDetail
 */
export interface SubscriptionTransitionEligibilityDetail {
  /**
   *
   * @type {Array<SubscriptionTransitionError>}
   * @memberof SubscriptionTransitionEligibilityDetail
   */
  errors?: Array<SubscriptionTransitionError> | null;
  /**
   *
   * @type {boolean}
   * @memberof SubscriptionTransitionEligibilityDetail
   */
  isEligible?: boolean;
  /**
   *
   * @type {string}
   * @memberof SubscriptionTransitionEligibilityDetail
   */
  transitionType?: string | null;
}

export function SubscriptionTransitionEligibilityDetailFromJSON(
  json: any,
): SubscriptionTransitionEligibilityDetail {
  return SubscriptionTransitionEligibilityDetailFromJSONTyped(json, false);
}

export function SubscriptionTransitionEligibilityDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SubscriptionTransitionEligibilityDetail {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    errors: !exists(json, 'errors')
      ? undefined
      : json['errors'] === null
      ? null
      : (json['errors'] as Array<any>).map(SubscriptionTransitionErrorFromJSON),
    isEligible: !exists(json, 'isEligible') ? undefined : json['isEligible'],
    transitionType: !exists(json, 'transitionType')
      ? undefined
      : json['transitionType'],
  };
}

export function SubscriptionTransitionEligibilityDetailToJSON(
  value?: SubscriptionTransitionEligibilityDetail | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    errors:
      value.errors === undefined
        ? undefined
        : value.errors === null
        ? null
        : (value.errors as Array<any>).map(SubscriptionTransitionErrorToJSON),
    isEligible: value.isEligible,
    transitionType: value.transitionType,
  };
}