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
  AgreementIdentityReference,
  AgreementIdentityReferenceFromJSON,
  AgreementIdentityReferenceFromJSONTyped,
  AgreementIdentityReferenceToJSON,
  Grouping,
  GroupingFromJSON,
  GroupingFromJSONTyped,
  GroupingToJSON,
  ObjectReference,
  ObjectReferenceFromJSON,
  ObjectReferenceFromJSONTyped,
  ObjectReferenceToJSON,
  Price,
  PriceFromJSON,
  PriceFromJSONTyped,
  PriceToJSON,
  PriceCalculationType,
  PriceCalculationTypeFromJSON,
  PriceCalculationTypeFromJSONTyped,
  PriceCalculationTypeToJSON,
  ProductContainerIssue,
  ProductContainerIssueFromJSON,
  ProductContainerIssueFromJSONTyped,
  ProductContainerIssueToJSON,
  ProductReference,
  ProductReferenceFromJSON,
  ProductReferenceFromJSONTyped,
  ProductReferenceToJSON,
  ProductRowUser,
  ProductRowUserFromJSON,
  ProductRowUserFromJSONTyped,
  ProductRowUserToJSON,
} from './';

/**
 *
 * @export
 * @interface ProductRow
 */
export interface ProductRow {
  /**
   *
   * @type {number}
   * @memberof ProductRow
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof ProductRow
   */
  productContainerId?: number;
  /**
   *
   * @type {number}
   * @memberof ProductRow
   */
  quantity?: number;
  /**
   *
   * @type {string}
   * @memberof ProductRow
   */
  comment?: string | null;
  /**
   *
   * @type {string}
   * @memberof ProductRow
   */
  usageCountryCode?: string | null;
  /**
   *
   * @type {Price}
   * @memberof ProductRow
   */
  salesUnitPrice?: Price;
  /**
   *
   * @type {Price}
   * @memberof ProductRow
   */
  alternativeSalesUnitPrice?: Price;
  /**
   *
   * @type {ObjectReference}
   * @memberof ProductRow
   */
  publisher?: ObjectReference;
  /**
   *
   * @type {ObjectReference}
   * @memberof ProductRow
   */
  program?: ObjectReference;
  /**
   *
   * @type {AgreementIdentityReference}
   * @memberof ProductRow
   */
  agreement?: AgreementIdentityReference;
  /**
   *
   * @type {ProductReference}
   * @memberof ProductRow
   */
  product?: ProductReference;
  /**
   *
   * @type {ProductRowUser}
   * @memberof ProductRow
   */
  user?: ProductRowUser;
  /**
   *
   * @type {ObjectReference}
   * @memberof ProductRow
   */
  productVariant?: ObjectReference;
  /**
   *
   * @type {ObjectReference}
   * @memberof ProductRow
   */
  invoiceProfile?: ObjectReference;
  /**
   *
   * @type {Grouping}
   * @memberof ProductRow
   */
  grouping?: Grouping;
  /**
   *
   * @type {Array<ProductContainerIssue>}
   * @memberof ProductRow
   */
  issues?: Array<ProductContainerIssue> | null;
  /**
   *
   * @type {string}
   * @memberof ProductRow
   */
  offeringType?: string | null;
  /**
   *
   * @type {PriceCalculationType}
   * @memberof ProductRow
   */
  priceCalculation?: PriceCalculationType;
  /**
   *
   * @type {string}
   * @memberof ProductRow
   */
  invoiceReference?: string | null;
  /**
   *
   * @type {string}
   * @memberof ProductRow
   */
  customerReference?: string | null;
  /**
   *
   * @type {number}
   * @memberof ProductRow
   */
  salesPricePerAlternativeUnit?: number;
  /**
   *
   * @type {number}
   * @memberof ProductRow
   */
  levelValue?: number;
}

export function ProductRowFromJSON(json: any): ProductRow {
  return ProductRowFromJSONTyped(json, false);
}

export function ProductRowFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProductRow {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    productContainerId: !exists(json, 'productContainerId')
      ? undefined
      : json['productContainerId'],
    quantity: !exists(json, 'quantity') ? undefined : json['quantity'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    usageCountryCode: !exists(json, 'usageCountryCode')
      ? undefined
      : json['usageCountryCode'],
    salesUnitPrice: !exists(json, 'salesUnitPrice')
      ? undefined
      : PriceFromJSON(json['salesUnitPrice']),
    alternativeSalesUnitPrice: !exists(json, 'alternativeSalesUnitPrice')
      ? undefined
      : PriceFromJSON(json['alternativeSalesUnitPrice']),
    publisher: !exists(json, 'publisher')
      ? undefined
      : ObjectReferenceFromJSON(json['publisher']),
    program: !exists(json, 'program')
      ? undefined
      : ObjectReferenceFromJSON(json['program']),
    agreement: !exists(json, 'agreement')
      ? undefined
      : AgreementIdentityReferenceFromJSON(json['agreement']),
    product: !exists(json, 'product')
      ? undefined
      : ProductReferenceFromJSON(json['product']),
    user: !exists(json, 'user')
      ? undefined
      : ProductRowUserFromJSON(json['user']),
    productVariant: !exists(json, 'productVariant')
      ? undefined
      : ObjectReferenceFromJSON(json['productVariant']),
    invoiceProfile: !exists(json, 'invoiceProfile')
      ? undefined
      : ObjectReferenceFromJSON(json['invoiceProfile']),
    grouping: !exists(json, 'grouping')
      ? undefined
      : GroupingFromJSON(json['grouping']),
    issues: !exists(json, 'issues')
      ? undefined
      : json['issues'] === null
      ? null
      : (json['issues'] as Array<any>).map(ProductContainerIssueFromJSON),
    offeringType: !exists(json, 'offeringType')
      ? undefined
      : json['offeringType'],
    priceCalculation: !exists(json, 'priceCalculation')
      ? undefined
      : PriceCalculationTypeFromJSON(json['priceCalculation']),
    invoiceReference: !exists(json, 'invoiceReference')
      ? undefined
      : json['invoiceReference'],
    customerReference: !exists(json, 'customerReference')
      ? undefined
      : json['customerReference'],
    salesPricePerAlternativeUnit: !exists(json, 'salesPricePerAlternativeUnit')
      ? undefined
      : json['salesPricePerAlternativeUnit'],
    levelValue: !exists(json, 'levelValue') ? undefined : json['levelValue'],
  };
}

export function ProductRowToJSON(value?: ProductRow | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    productContainerId: value.productContainerId,
    quantity: value.quantity,
    comment: value.comment,
    usageCountryCode: value.usageCountryCode,
    salesUnitPrice: PriceToJSON(value.salesUnitPrice),
    alternativeSalesUnitPrice: PriceToJSON(value.alternativeSalesUnitPrice),
    publisher: ObjectReferenceToJSON(value.publisher),
    program: ObjectReferenceToJSON(value.program),
    agreement: AgreementIdentityReferenceToJSON(value.agreement),
    product: ProductReferenceToJSON(value.product),
    user: ProductRowUserToJSON(value.user),
    productVariant: ObjectReferenceToJSON(value.productVariant),
    invoiceProfile: ObjectReferenceToJSON(value.invoiceProfile),
    grouping: GroupingToJSON(value.grouping),
    issues:
      value.issues === undefined
        ? undefined
        : value.issues === null
        ? null
        : (value.issues as Array<any>).map(ProductContainerIssueToJSON),
    offeringType: value.offeringType,
    priceCalculation: PriceCalculationTypeToJSON(value.priceCalculation),
    invoiceReference: value.invoiceReference,
    customerReference: value.customerReference,
    salesPricePerAlternativeUnit: value.salesPricePerAlternativeUnit,
    levelValue: value.levelValue,
  };
}
