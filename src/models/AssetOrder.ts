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
  AssetOrderError,
  AssetOrderErrorFromJSON,
  AssetOrderErrorFromJSONTyped,
  AssetOrderErrorToJSON,
  AssetOrderLine,
  AssetOrderLineFromJSON,
  AssetOrderLineFromJSONTyped,
  AssetOrderLineToJSON,
} from './';

/**
 *
 * @export
 * @interface AssetOrder
 */
export interface AssetOrder {
  /**
   *
   * @type {string}
   * @memberof AssetOrder
   */
  externalOrderId?: string | null;
  /**
   *
   * @type {string}
   * @memberof AssetOrder
   */
  countryCode?: string | null;
  /**
   *
   * @type {number}
   * @memberof AssetOrder
   */
  resellerCustomerId?: number;
  /**
   *
   * @type {string}
   * @memberof AssetOrder
   */
  adminAccount?: string | null;
  /**
   *
   * @type {string}
   * @memberof AssetOrder
   */
  notificationEmail?: string | null;
  /**
   *
   * @type {number}
   * @memberof AssetOrder
   */
  invoiceProfileId?: number | null;
  /**
   *
   * @type {Array<AssetOrderError>}
   * @memberof AssetOrder
   */
  errors?: Array<AssetOrderError> | null;
  /**
   *
   * @type {Array<AssetOrderLine>}
   * @memberof AssetOrder
   */
  orderLines?: Array<AssetOrderLine> | null;
}

export function AssetOrderFromJSON(json: any): AssetOrder {
  return AssetOrderFromJSONTyped(json, false);
}

export function AssetOrderFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetOrder {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    externalOrderId: !exists(json, 'externalOrderId')
      ? undefined
      : json['externalOrderId'],
    countryCode: !exists(json, 'countryCode') ? undefined : json['countryCode'],
    resellerCustomerId: !exists(json, 'resellerCustomerId')
      ? undefined
      : json['resellerCustomerId'],
    adminAccount: !exists(json, 'adminAccount')
      ? undefined
      : json['adminAccount'],
    notificationEmail: !exists(json, 'notificationEmail')
      ? undefined
      : json['notificationEmail'],
    invoiceProfileId: !exists(json, 'invoiceProfileId')
      ? undefined
      : json['invoiceProfileId'],
    errors: !exists(json, 'errors')
      ? undefined
      : json['errors'] === null
      ? null
      : (json['errors'] as Array<any>).map(AssetOrderErrorFromJSON),
    orderLines: !exists(json, 'orderLines')
      ? undefined
      : json['orderLines'] === null
      ? null
      : (json['orderLines'] as Array<any>).map(AssetOrderLineFromJSON),
  };
}

export function AssetOrderToJSON(value?: AssetOrder | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    externalOrderId: value.externalOrderId,
    countryCode: value.countryCode,
    resellerCustomerId: value.resellerCustomerId,
    adminAccount: value.adminAccount,
    notificationEmail: value.notificationEmail,
    invoiceProfileId: value.invoiceProfileId,
    errors:
      value.errors === undefined
        ? undefined
        : value.errors === null
        ? null
        : (value.errors as Array<any>).map(AssetOrderErrorToJSON),
    orderLines:
      value.orderLines === undefined
        ? undefined
        : value.orderLines === null
        ? null
        : (value.orderLines as Array<any>).map(AssetOrderLineToJSON),
  };
}