[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / AgreementsApi

# Class: AgreementsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AgreementsApi`**

## Table of contents

### Constructors

- [constructor](AgreementsApi.md#constructor)

### Properties

- [configuration](AgreementsApi.md#configuration)

### Methods

- [apiV1AgreementsGet](AgreementsApi.md#apiv1agreementsget)
- [apiV1AgreementsGetRaw](AgreementsApi.md#apiv1agreementsgetraw)
- [request](AgreementsApi.md#request)
- [withMiddleware](AgreementsApi.md#withmiddleware)
- [withPostMiddleware](AgreementsApi.md#withpostmiddleware)
- [withPreMiddleware](AgreementsApi.md#withpremiddleware)

## Constructors

### constructor

• **new AgreementsApi**(`configuration?`)

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

### apiV1AgreementsGet

▸ **apiV1AgreementsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Agreement`](../interfaces/Agreement.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementsGetRequest`](../interfaces/ApiV1AgreementsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Agreement`](../interfaces/Agreement.md)[]\>

#### Defined in

[src/apis/AgreementsApi.ts:145](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementsApi.ts#L145)

___

### apiV1AgreementsGetRaw

▸ **apiV1AgreementsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Agreement`](../interfaces/Agreement.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementsGetRequest`](../interfaces/ApiV1AgreementsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Agreement`](../interfaces/Agreement.md)[]\>\>

#### Defined in

[src/apis/AgreementsApi.ts:56](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementsApi.ts#L56)

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
