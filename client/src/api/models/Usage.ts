/* tslint:disable */
/* eslint-disable */
/**
 * 簡易物品管理WebAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 使用状況
 * @export
 * @interface Usage
 */
export interface Usage {
    /**
     * 使用状況ID
     * @type {number}
     * @memberof Usage
     */
    id?: number;
    /**
     * 使用者ユーザID
     * @type {number}
     * @memberof Usage
     */
    userId?: number;
    /**
     * 使用開始日時
     * @type {Date}
     * @memberof Usage
     */
    startAt?: Date;
    /**
     * 使用終了日時
     * @type {Date}
     * @memberof Usage
     */
    endAt?: Date;
    /**
     * 物品ID一覧
     * @type {Array<number>}
     * @memberof Usage
     */
    items?: Array<number>;
}

export function UsageFromJSON(json: any): Usage {
    return UsageFromJSONTyped(json, false);
}

export function UsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Usage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'startAt': !exists(json, 'startAt') ? undefined : (new Date(json['startAt'])),
        'endAt': !exists(json, 'endAt') ? undefined : (new Date(json['endAt'])),
        'items': !exists(json, 'items') ? undefined : json['items'],
    };
}

export function UsageToJSON(value?: Usage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'startAt': value.startAt === undefined ? undefined : (value.startAt.toISOString()),
        'endAt': value.endAt === undefined ? undefined : (value.endAt.toISOString()),
        'items': value.items,
    };
}

