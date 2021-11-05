[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / BlogItemsApi

# Class: BlogItemsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`BlogItemsApi`**

## Table of contents

### Constructors

- [constructor](BlogItemsApi.md#constructor)

### Properties

- [configuration](BlogItemsApi.md#configuration)

### Methods

- [apiV1BlogItemsGet](BlogItemsApi.md#apiv1blogitemsget)
- [apiV1BlogItemsGetRaw](BlogItemsApi.md#apiv1blogitemsgetraw)
- [request](BlogItemsApi.md#request)
- [withMiddleware](BlogItemsApi.md#withmiddleware)
- [withPostMiddleware](BlogItemsApi.md#withpostmiddleware)
- [withPreMiddleware](BlogItemsApi.md#withpremiddleware)

## Constructors

### constructor

• **new BlogItemsApi**(`configuration?`)

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

### apiV1BlogItemsGet

▸ **apiV1BlogItemsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`BlogItem`](../interfaces/BlogItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BlogItemsGetRequest`](../interfaces/ApiV1BlogItemsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`BlogItem`](../interfaces/BlogItem.md)[]\>

#### Defined in

[src/apis/BlogItemsApi.ts:64](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BlogItemsApi.ts#L64)

___

### apiV1BlogItemsGetRaw

▸ **apiV1BlogItemsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BlogItem`](../interfaces/BlogItem.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BlogItemsGetRequest`](../interfaces/ApiV1BlogItemsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BlogItem`](../interfaces/BlogItem.md)[]\>\>

#### Defined in

[src/apis/BlogItemsApi.ts:35](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BlogItemsApi.ts#L35)

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
