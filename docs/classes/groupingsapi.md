[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / GroupingsApi

# Class: GroupingsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`GroupingsApi`**

## Table of contents

### Constructors

- [constructor](GroupingsApi.md#constructor)

### Properties

- [configuration](GroupingsApi.md#configuration)

### Methods

- [apiV1GroupingsGet](GroupingsApi.md#apiv1groupingsget)
- [apiV1GroupingsGetRaw](GroupingsApi.md#apiv1groupingsgetraw)
- [apiV1GroupingsIdDelete](GroupingsApi.md#apiv1groupingsiddelete)
- [apiV1GroupingsIdDeleteRaw](GroupingsApi.md#apiv1groupingsiddeleteraw)
- [apiV1GroupingsIdGet](GroupingsApi.md#apiv1groupingsidget)
- [apiV1GroupingsIdGetRaw](GroupingsApi.md#apiv1groupingsidgetraw)
- [apiV1GroupingsIdPut](GroupingsApi.md#apiv1groupingsidput)
- [apiV1GroupingsIdPutRaw](GroupingsApi.md#apiv1groupingsidputraw)
- [apiV1GroupingsPost](GroupingsApi.md#apiv1groupingspost)
- [apiV1GroupingsPostRaw](GroupingsApi.md#apiv1groupingspostraw)
- [request](GroupingsApi.md#request)
- [withMiddleware](GroupingsApi.md#withmiddleware)
- [withPostMiddleware](GroupingsApi.md#withpostmiddleware)
- [withPreMiddleware](GroupingsApi.md#withpremiddleware)

## Constructors

### constructor

• **new GroupingsApi**(`configuration?`)

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

### apiV1GroupingsGet

▸ **apiV1GroupingsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Grouping`](../interfaces/Grouping.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1GroupingsGetRequest`](../interfaces/ApiV1GroupingsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Grouping`](../interfaces/Grouping.md)[]\>

#### Defined in

[src/apis/GroupingsApi.ts:96](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/GroupingsApi.ts#L96)

___

### apiV1GroupingsGetRaw

▸ **apiV1GroupingsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Grouping`](../interfaces/Grouping.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1GroupingsGetRequest`](../interfaces/ApiV1GroupingsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Grouping`](../interfaces/Grouping.md)[]\>\>

#### Defined in

[src/apis/GroupingsApi.ts:55](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/GroupingsApi.ts#L55)

___

### apiV1GroupingsIdDelete

▸ **apiV1GroupingsIdDelete**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1GroupingsIdDeleteRequest`](../interfaces/ApiV1GroupingsIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/GroupingsApi.ts:128](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/GroupingsApi.ts#L128)

___

### apiV1GroupingsIdDeleteRaw

▸ **apiV1GroupingsIdDeleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1GroupingsIdDeleteRequest`](../interfaces/ApiV1GroupingsIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/GroupingsApi.ts:103](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/GroupingsApi.ts#L103)

___

### apiV1GroupingsIdGet

▸ **apiV1GroupingsIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Grouping`](../interfaces/Grouping.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1GroupingsIdGetRequest`](../interfaces/ApiV1GroupingsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Grouping`](../interfaces/Grouping.md)\>

#### Defined in

[src/apis/GroupingsApi.ts:159](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/GroupingsApi.ts#L159)

___

### apiV1GroupingsIdGetRaw

▸ **apiV1GroupingsIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Grouping`](../interfaces/Grouping.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1GroupingsIdGetRequest`](../interfaces/ApiV1GroupingsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Grouping`](../interfaces/Grouping.md)\>\>

#### Defined in

[src/apis/GroupingsApi.ts:134](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/GroupingsApi.ts#L134)

___

### apiV1GroupingsIdPut

▸ **apiV1GroupingsIdPut**(`requestParameters`, `initOverrides?`): `Promise`<[`Grouping`](../interfaces/Grouping.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1GroupingsIdPutRequest`](../interfaces/ApiV1GroupingsIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Grouping`](../interfaces/Grouping.md)\>

#### Defined in

[src/apis/GroupingsApi.ts:194](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/GroupingsApi.ts#L194)

___

### apiV1GroupingsIdPutRaw

▸ **apiV1GroupingsIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Grouping`](../interfaces/Grouping.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1GroupingsIdPutRequest`](../interfaces/ApiV1GroupingsIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Grouping`](../interfaces/Grouping.md)\>\>

#### Defined in

[src/apis/GroupingsApi.ts:166](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/GroupingsApi.ts#L166)

___

### apiV1GroupingsPost

▸ **apiV1GroupingsPost**(`requestParameters`, `initOverrides?`): `Promise`<[`Grouping`](../interfaces/Grouping.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1GroupingsPostRequest`](../interfaces/ApiV1GroupingsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Grouping`](../interfaces/Grouping.md)\>

#### Defined in

[src/apis/GroupingsApi.ts:225](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/GroupingsApi.ts#L225)

___

### apiV1GroupingsPostRaw

▸ **apiV1GroupingsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Grouping`](../interfaces/Grouping.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1GroupingsPostRequest`](../interfaces/ApiV1GroupingsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Grouping`](../interfaces/Grouping.md)\>\>

#### Defined in

[src/apis/GroupingsApi.ts:201](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/GroupingsApi.ts#L201)

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
