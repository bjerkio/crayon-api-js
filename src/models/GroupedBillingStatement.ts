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
  Price,
  PriceFromJSON,
  PriceFromJSONTyped,
  PriceToJSON,
  ProvisionType,
  ProvisionTypeFromJSON,
  ProvisionTypeFromJSONTyped,
  ProvisionTypeToJSON,
} from './';

/**
 *
 * @export
 * @interface GroupedBillingStatement
 */
export interface GroupedBillingStatement {
  /**
   *
   * @type {number}
   * @memberof GroupedBillingStatement
   */
  groupId?: number;
  /**
   *
   * @type {number}
   * @memberof GroupedBillingStatement
   */
  id?: number;
  /**
   *
   * @type {Price}
   * @memberof GroupedBillingStatement
   */
  totalSalesPrice?: Price;
  /**
   *
   * @type {ObjectReference}
   * @memberof GroupedBillingStatement
   */
  invoiceProfile?: ObjectReference;
  /**
   *
   * @type {ObjectReference}
   * @memberof GroupedBillingStatement
   */
  organization?: ObjectReference;
  /**
   *
   * @type {Date}
   * @memberof GroupedBillingStatement
   */
  startDate?: Date;
  /**
   *
   * @type {Date}
   * @memberof GroupedBillingStatement
   */
  endDate?: Date;
  /**
   *
   * @type {ProvisionType}
   * @memberof GroupedBillingStatement
   */
  provisionType?: ProvisionType;
  /**
   *
   * @type {string}
   * @memberof GroupedBillingStatement
   */
  orderId?: string | null;
}

export function GroupedBillingStatementFromJSON(
  json: any,
): GroupedBillingStatement {
  return GroupedBillingStatementFromJSONTyped(json, false);
}

export function GroupedBillingStatementFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GroupedBillingStatement {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    groupId: !exists(json, 'groupId') ? undefined : json['groupId'],
    id: !exists(json, 'id') ? undefined : json['id'],
    totalSalesPrice: !exists(json, 'totalSalesPrice')
      ? undefined
      : PriceFromJSON(json['totalSalesPrice']),
    invoiceProfile: !exists(json, 'invoiceProfile')
      ? undefined
      : ObjectReferenceFromJSON(json['invoiceProfile']),
    organization: !exists(json, 'organization')
      ? undefined
      : ObjectReferenceFromJSON(json['organization']),
    startDate: !exists(json, 'startDate')
      ? undefined
      : new Date(json['startDate']),
    endDate: !exists(json, 'endDate') ? undefined : new Date(json['endDate']),
    provisionType: !exists(json, 'provisionType')
      ? undefined
      : ProvisionTypeFromJSON(json['provisionType']),
    orderId: !exists(json, 'orderId') ? undefined : json['orderId'],
  };
}

export function GroupedBillingStatementToJSON(
  value?: GroupedBillingStatement | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    groupId: value.groupId,
    id: value.id,
    totalSalesPrice: PriceToJSON(value.totalSalesPrice),
    invoiceProfile: ObjectReferenceToJSON(value.invoiceProfile),
    organization: ObjectReferenceToJSON(value.organization),
    startDate:
      value.startDate === undefined ? undefined : value.startDate.toISOString(),
    endDate:
      value.endDate === undefined ? undefined : value.endDate.toISOString(),
    provisionType: ProvisionTypeToJSON(value.provisionType),
    orderId: value.orderId,
  };
}
