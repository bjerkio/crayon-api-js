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
    AgreementType,
    AgreementTypeFromJSON,
    AgreementTypeFromJSONTyped,
    AgreementTypeToJSON,
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
    ProductInformation,
    ProductInformationFromJSON,
    ProductInformationFromJSONTyped,
    ProductInformationToJSON,
    ProductTypeDto,
    ProductTypeDtoFromJSON,
    ProductTypeDtoFromJSONTyped,
    ProductTypeDtoToJSON,
    ProductVariant,
    ProductVariantFromJSON,
    ProductVariantFromJSONTyped,
    ProductVariantToJSON,
} from './';

/**
 * 
 * @export
 * @interface AgreementProduct
 */
export interface AgreementProduct {
    /**
     * 
     * @type {string}
     * @memberof AgreementProduct
     */
    uniqueId?: string | null;
    /**
     * 
     * @type {ProductTypeDto}
     * @memberof AgreementProduct
     */
    productType?: ProductTypeDto;
    /**
     * 
     * @type {ProductVariant}
     * @memberof AgreementProduct
     */
    productVariant?: ProductVariant;
    /**
     * 
     * @type {ObjectReference}
     * @memberof AgreementProduct
     */
    agreement?: ObjectReference;
    /**
     * 
     * @type {string}
     * @memberof AgreementProduct
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AgreementProduct
     */
    priceId?: number;
    /**
     * 
     * @type {Price}
     * @memberof AgreementProduct
     */
    recommendedRetailPrice?: Price;
    /**
     * 
     * @type {Price}
     * @memberof AgreementProduct
     */
    salesPrice?: Price;
    /**
     * 
     * @type {Price}
     * @memberof AgreementProduct
     */
    alternativeSalesPrice?: Price;
    /**
     * 
     * @type {string}
     * @memberof AgreementProduct
     */
    priceListName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AgreementProduct
     */
    monthMultiplier?: number;
    /**
     * 
     * @type {PriceCalculationType}
     * @memberof AgreementProduct
     */
    priceCalculationType?: PriceCalculationType;
    /**
     * 
     * @type {AgreementType}
     * @memberof AgreementProduct
     */
    agreementType?: AgreementType;
    /**
     * 
     * @type {ProductInformation}
     * @memberof AgreementProduct
     */
    productInformation?: ProductInformation;
    /**
     * 
     * @type {number}
     * @memberof AgreementProduct
     */
    minimumQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof AgreementProduct
     */
    maximumQuantity?: number | null;
    /**
     * 
     * @type {ObjectReference}
     * @memberof AgreementProduct
     */
    catalog?: ObjectReference;
}

export function AgreementProductFromJSON(json: any): AgreementProduct {
    return AgreementProductFromJSONTyped(json, false);
}

export function AgreementProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgreementProduct {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uniqueId': !exists(json, 'uniqueId') ? undefined : json['uniqueId'],
        'productType': !exists(json, 'productType') ? undefined : ProductTypeDtoFromJSON(json['productType']),
        'productVariant': !exists(json, 'productVariant') ? undefined : ProductVariantFromJSON(json['productVariant']),
        'agreement': !exists(json, 'agreement') ? undefined : ObjectReferenceFromJSON(json['agreement']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'priceId': !exists(json, 'priceId') ? undefined : json['priceId'],
        'recommendedRetailPrice': !exists(json, 'recommendedRetailPrice') ? undefined : PriceFromJSON(json['recommendedRetailPrice']),
        'salesPrice': !exists(json, 'salesPrice') ? undefined : PriceFromJSON(json['salesPrice']),
        'alternativeSalesPrice': !exists(json, 'alternativeSalesPrice') ? undefined : PriceFromJSON(json['alternativeSalesPrice']),
        'priceListName': !exists(json, 'priceListName') ? undefined : json['priceListName'],
        'monthMultiplier': !exists(json, 'monthMultiplier') ? undefined : json['monthMultiplier'],
        'priceCalculationType': !exists(json, 'priceCalculationType') ? undefined : PriceCalculationTypeFromJSON(json['priceCalculationType']),
        'agreementType': !exists(json, 'agreementType') ? undefined : AgreementTypeFromJSON(json['agreementType']),
        'productInformation': !exists(json, 'productInformation') ? undefined : ProductInformationFromJSON(json['productInformation']),
        'minimumQuantity': !exists(json, 'minimumQuantity') ? undefined : json['minimumQuantity'],
        'maximumQuantity': !exists(json, 'maximumQuantity') ? undefined : json['maximumQuantity'],
        'catalog': !exists(json, 'catalog') ? undefined : ObjectReferenceFromJSON(json['catalog']),
    };
}

export function AgreementProductToJSON(value?: AgreementProduct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uniqueId': value.uniqueId,
        'productType': ProductTypeDtoToJSON(value.productType),
        'productVariant': ProductVariantToJSON(value.productVariant),
        'agreement': ObjectReferenceToJSON(value.agreement),
        'name': value.name,
        'priceId': value.priceId,
        'recommendedRetailPrice': PriceToJSON(value.recommendedRetailPrice),
        'salesPrice': PriceToJSON(value.salesPrice),
        'alternativeSalesPrice': PriceToJSON(value.alternativeSalesPrice),
        'priceListName': value.priceListName,
        'monthMultiplier': value.monthMultiplier,
        'priceCalculationType': PriceCalculationTypeToJSON(value.priceCalculationType),
        'agreementType': AgreementTypeToJSON(value.agreementType),
        'productInformation': ProductInformationToJSON(value.productInformation),
        'minimumQuantity': value.minimumQuantity,
        'maximumQuantity': value.maximumQuantity,
        'catalog': ObjectReferenceToJSON(value.catalog),
    };
}

