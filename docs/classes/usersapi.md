[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / UsersApi

# Class: UsersApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`UsersApi`**

## Table of contents

### Constructors

- [constructor](UsersApi.md#constructor)

### Properties

- [configuration](UsersApi.md#configuration)

### Methods

- [apiV1UsersGet](UsersApi.md#apiv1usersget)
- [apiV1UsersGetRaw](UsersApi.md#apiv1usersgetraw)
- [apiV1UsersIdChangepasswordPut](UsersApi.md#apiv1usersidchangepasswordput)
- [apiV1UsersIdChangepasswordPutRaw](UsersApi.md#apiv1usersidchangepasswordputraw)
- [apiV1UsersIdDelete](UsersApi.md#apiv1usersiddelete)
- [apiV1UsersIdDeleteRaw](UsersApi.md#apiv1usersiddeleteraw)
- [apiV1UsersIdGet](UsersApi.md#apiv1usersidget)
- [apiV1UsersIdGetRaw](UsersApi.md#apiv1usersidgetraw)
- [apiV1UsersIdPut](UsersApi.md#apiv1usersidput)
- [apiV1UsersIdPutRaw](UsersApi.md#apiv1usersidputraw)
- [apiV1UsersPost](UsersApi.md#apiv1userspost)
- [apiV1UsersPostRaw](UsersApi.md#apiv1userspostraw)
- [apiV1UsersUserGet](UsersApi.md#apiv1usersuserget)
- [apiV1UsersUserGetRaw](UsersApi.md#apiv1usersusergetraw)
- [request](UsersApi.md#request)
- [withMiddleware](UsersApi.md#withmiddleware)
- [withPostMiddleware](UsersApi.md#withpostmiddleware)
- [withPreMiddleware](UsersApi.md#withpremiddleware)

## Constructors

### constructor

• **new UsersApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/runtime.ts:28](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L28)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### apiV1UsersGet

▸ **apiV1UsersGet**(`requestParameters`, `initOverrides?`): `Promise`<[`User`](../interfaces/User.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersGetRequest`](../interfaces/ApiV1UsersGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`User`](../interfaces/User.md)[]\>

#### Defined in

[src/apis/UsersApi.ts:111](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L111)

___

### apiV1UsersGetRaw

▸ **apiV1UsersGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`User`](../interfaces/User.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersGetRequest`](../interfaces/ApiV1UsersGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[src/apis/UsersApi.ts:70](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L70)

___

### apiV1UsersIdChangepasswordPut

▸ **apiV1UsersIdChangepasswordPut**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersIdChangepasswordPutRequest`](../interfaces/ApiV1UsersIdChangepasswordPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/apis/UsersApi.ts:146](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L146)

___

### apiV1UsersIdChangepasswordPutRaw

▸ **apiV1UsersIdChangepasswordPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersIdChangepasswordPutRequest`](../interfaces/ApiV1UsersIdChangepasswordPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Defined in

[src/apis/UsersApi.ts:118](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L118)

___

### apiV1UsersIdDelete

▸ **apiV1UsersIdDelete**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersIdDeleteRequest`](../interfaces/ApiV1UsersIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/apis/UsersApi.ts:178](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L178)

___

### apiV1UsersIdDeleteRaw

▸ **apiV1UsersIdDeleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersIdDeleteRequest`](../interfaces/ApiV1UsersIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Defined in

[src/apis/UsersApi.ts:153](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L153)

___

### apiV1UsersIdGet

▸ **apiV1UsersIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`User`](../interfaces/User.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersIdGetRequest`](../interfaces/ApiV1UsersIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`User`](../interfaces/User.md)\>

#### Defined in

[src/apis/UsersApi.ts:210](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L210)

___

### apiV1UsersIdGetRaw

▸ **apiV1UsersIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`User`](../interfaces/User.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersIdGetRequest`](../interfaces/ApiV1UsersIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`User`](../interfaces/User.md)\>\>

#### Defined in

[src/apis/UsersApi.ts:185](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L185)

___

### apiV1UsersIdPut

▸ **apiV1UsersIdPut**(`requestParameters`, `initOverrides?`): `Promise`<[`User`](../interfaces/User.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersIdPutRequest`](../interfaces/ApiV1UsersIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`User`](../interfaces/User.md)\>

#### Defined in

[src/apis/UsersApi.ts:245](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L245)

___

### apiV1UsersIdPutRaw

▸ **apiV1UsersIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`User`](../interfaces/User.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersIdPutRequest`](../interfaces/ApiV1UsersIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`User`](../interfaces/User.md)\>\>

#### Defined in

[src/apis/UsersApi.ts:217](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L217)

___

### apiV1UsersPost

▸ **apiV1UsersPost**(`requestParameters`, `initOverrides?`): `Promise`<[`User`](../interfaces/User.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersPostRequest`](../interfaces/ApiV1UsersPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`User`](../interfaces/User.md)\>

#### Defined in

[src/apis/UsersApi.ts:276](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L276)

___

### apiV1UsersPostRaw

▸ **apiV1UsersPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`User`](../interfaces/User.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersPostRequest`](../interfaces/ApiV1UsersPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`User`](../interfaces/User.md)\>\>

#### Defined in

[src/apis/UsersApi.ts:252](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L252)

___

### apiV1UsersUserGet

▸ **apiV1UsersUserGet**(`requestParameters`, `initOverrides?`): `Promise`<[`User`](../interfaces/User.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersUserGetRequest`](../interfaces/ApiV1UsersUserGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`User`](../interfaces/User.md)\>

#### Defined in

[src/apis/UsersApi.ts:308](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L308)

___

### apiV1UsersUserGetRaw

▸ **apiV1UsersUserGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`User`](../interfaces/User.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsersUserGetRequest`](../interfaces/ApiV1UsersUserGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`User`](../interfaces/User.md)\>\>

#### Defined in

[src/apis/UsersApi.ts:283](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsersApi.ts#L283)

___

### request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

#### Defined in

[src/runtime.ts:48](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L48)

___

### withMiddleware

▸ **withMiddleware**<`T`\>(...`middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

#### Defined in

[src/runtime.ts:32](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L32)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(...`postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

#### Defined in

[src/runtime.ts:43](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L43)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(...`preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

#### Defined in

[src/runtime.ts:38](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L38)
