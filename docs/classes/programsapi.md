[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / ProgramsApi

# Class: ProgramsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ProgramsApi`**

## Table of contents

### Constructors

- [constructor](ProgramsApi.md#constructor)

### Properties

- [configuration](ProgramsApi.md#configuration)

### Methods

- [apiV1ProgramsGet](ProgramsApi.md#apiv1programsget)
- [apiV1ProgramsGetRaw](ProgramsApi.md#apiv1programsgetraw)
- [apiV1ProgramsIdGet](ProgramsApi.md#apiv1programsidget)
- [apiV1ProgramsIdGetRaw](ProgramsApi.md#apiv1programsidgetraw)
- [request](ProgramsApi.md#request)
- [withMiddleware](ProgramsApi.md#withmiddleware)
- [withPostMiddleware](ProgramsApi.md#withpostmiddleware)
- [withPreMiddleware](ProgramsApi.md#withpremiddleware)

## Constructors

### constructor

• **new ProgramsApi**(`configuration?`)

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

### apiV1ProgramsGet

▸ **apiV1ProgramsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Program`](../interfaces/Program.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProgramsGetRequest`](../interfaces/ApiV1ProgramsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Program`](../interfaces/Program.md)[]\>

#### Defined in

[src/apis/ProgramsApi.ts:91](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProgramsApi.ts#L91)

___

### apiV1ProgramsGetRaw

▸ **apiV1ProgramsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Program`](../interfaces/Program.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProgramsGetRequest`](../interfaces/ApiV1ProgramsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Program`](../interfaces/Program.md)[]\>\>

#### Defined in

[src/apis/ProgramsApi.ts:46](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProgramsApi.ts#L46)

___

### apiV1ProgramsIdGet

▸ **apiV1ProgramsIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Program`](../interfaces/Program.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProgramsIdGetRequest`](../interfaces/ApiV1ProgramsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Program`](../interfaces/Program.md)\>

#### Defined in

[src/apis/ProgramsApi.ts:123](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProgramsApi.ts#L123)

___

### apiV1ProgramsIdGetRaw

▸ **apiV1ProgramsIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Program`](../interfaces/Program.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProgramsIdGetRequest`](../interfaces/ApiV1ProgramsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Program`](../interfaces/Program.md)\>\>

#### Defined in

[src/apis/ProgramsApi.ts:98](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProgramsApi.ts#L98)

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
