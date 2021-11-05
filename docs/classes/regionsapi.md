[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / RegionsApi

# Class: RegionsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`RegionsApi`**

## Table of contents

### Constructors

- [constructor](RegionsApi.md#constructor)

### Properties

- [configuration](RegionsApi.md#configuration)

### Methods

- [apiV1RegionsBycodeGet](RegionsApi.md#apiv1regionsbycodeget)
- [apiV1RegionsBycodeGetRaw](RegionsApi.md#apiv1regionsbycodegetraw)
- [apiV1RegionsGet](RegionsApi.md#apiv1regionsget)
- [apiV1RegionsGetRaw](RegionsApi.md#apiv1regionsgetraw)
- [request](RegionsApi.md#request)
- [withMiddleware](RegionsApi.md#withmiddleware)
- [withPostMiddleware](RegionsApi.md#withpostmiddleware)
- [withPreMiddleware](RegionsApi.md#withpremiddleware)

## Constructors

### constructor

• **new RegionsApi**(`configuration?`)

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

### apiV1RegionsBycodeGet

▸ **apiV1RegionsBycodeGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Region`](../interfaces/Region.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1RegionsBycodeGetRequest`](../interfaces/ApiV1RegionsBycodeGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Region`](../interfaces/Region.md)\>

#### Defined in

[src/apis/RegionsApi.ts:75](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/RegionsApi.ts#L75)

___

### apiV1RegionsBycodeGetRaw

▸ **apiV1RegionsBycodeGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Region`](../interfaces/Region.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1RegionsBycodeGetRequest`](../interfaces/ApiV1RegionsBycodeGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Region`](../interfaces/Region.md)\>\>

#### Defined in

[src/apis/RegionsApi.ts:46](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/RegionsApi.ts#L46)

___

### apiV1RegionsGet

▸ **apiV1RegionsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Region`](../interfaces/Region.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1RegionsGetRequest`](../interfaces/ApiV1RegionsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Region`](../interfaces/Region.md)[]\>

#### Defined in

[src/apis/RegionsApi.ts:123](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/RegionsApi.ts#L123)

___

### apiV1RegionsGetRaw

▸ **apiV1RegionsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Region`](../interfaces/Region.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1RegionsGetRequest`](../interfaces/ApiV1RegionsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Region`](../interfaces/Region.md)[]\>\>

#### Defined in

[src/apis/RegionsApi.ts:82](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/RegionsApi.ts#L82)

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
