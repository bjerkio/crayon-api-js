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

/**
 * 
 * @export
 * @enum {string}
 */
export enum ProductContainerCommentType {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_4 = 4,
    NUMBER_8 = 8,
    NUMBER_16 = 16,
    NUMBER_32 = 32,
    NUMBER_64 = 64,
    NUMBER_128 = 128,
    NUMBER_256 = 256,
    NUMBER_512 = 512,
    NUMBER_1024 = 1024,
    NUMBER_2048 = 2048,
    NUMBER_4096 = 4096,
    NUMBER_8190 = 8190
}

export function ProductContainerCommentTypeFromJSON(json: any): ProductContainerCommentType {
    return ProductContainerCommentTypeFromJSONTyped(json, false);
}

export function ProductContainerCommentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductContainerCommentType {
    return json as ProductContainerCommentType;
}

export function ProductContainerCommentTypeToJSON(value?: ProductContainerCommentType | null): any {
    return value as any;
}
