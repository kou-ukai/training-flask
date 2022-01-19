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
 * ログイン要求
 * @export
 * @interface LoginReq
 */
export interface LoginReq {
    /**
     * NFCタグのシリアル番号
     * @type {string}
     * @memberof LoginReq
     */
    serialNo?: string;
}

export function LoginReqFromJSON(json: any): LoginReq {
    return LoginReqFromJSONTyped(json, false);
}

export function LoginReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'serialNo': !exists(json, 'serialNo') ? undefined : json['serialNo'],
    };
}

export function LoginReqToJSON(value?: LoginReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'serialNo': value.serialNo,
    };
}
