[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / ActivityLogsApi

# Class: ActivityLogsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ActivityLogsApi`**

## Table of contents

### Constructors

- [constructor](ActivityLogsApi.md#constructor)

### Properties

- [configuration](ActivityLogsApi.md#configuration)

### Methods

- [apiV1ActivityLogsGet](ActivityLogsApi.md#apiv1activitylogsget)
- [apiV1ActivityLogsGetRaw](ActivityLogsApi.md#apiv1activitylogsgetraw)
- [request](ActivityLogsApi.md#request)
- [withMiddleware](ActivityLogsApi.md#withmiddleware)
- [withPostMiddleware](ActivityLogsApi.md#withpostmiddleware)
- [withPreMiddleware](ActivityLogsApi.md#withpremiddleware)

## Constructors

### constructor

• **new ActivityLogsApi**(`configuration?`)

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

### apiV1ActivityLogsGet

▸ **apiV1ActivityLogsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`ActivityLogItem`](../interfaces/ActivityLogItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ActivityLogsGetRequest`](../interfaces/ApiV1ActivityLogsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ActivityLogItem`](../interfaces/ActivityLogItem.md)[]\>

#### Defined in

[src/apis/ActivityLogsApi.ts:94](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ActivityLogsApi.ts#L94)

___

### apiV1ActivityLogsGetRaw

▸ **apiV1ActivityLogsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ActivityLogItem`](../interfaces/ActivityLogItem.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ActivityLogsGetRequest`](../interfaces/ApiV1ActivityLogsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ActivityLogItem`](../interfaces/ActivityLogItem.md)[]\>\>

#### Defined in

[src/apis/ActivityLogsApi.ts:41](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ActivityLogsApi.ts#L41)

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
