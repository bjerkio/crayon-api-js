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
 * @interface BlogItem
 */
export interface BlogItem {
    /**
     * 
     * @type {string}
     * @memberof BlogItem
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BlogItem
     */
    author?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BlogItem
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BlogItem
     */
    image?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BlogItem
     */
    link?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof BlogItem
     */
    publicationDate?: Date;
}

export function BlogItemFromJSON(json: any): BlogItem {
    return BlogItemFromJSONTyped(json, false);
}

export function BlogItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlogItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'publicationDate': !exists(json, 'publicationDate') ? undefined : (new Date(json['publicationDate'])),
    };
}

export function BlogItemToJSON(value?: BlogItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'author': value.author,
        'description': value.description,
        'image': value.image,
        'link': value.link,
        'publicationDate': value.publicationDate === undefined ? undefined : (value.publicationDate.toISOString()),
    };
}
