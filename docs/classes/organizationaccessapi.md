[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / OrganizationAccessApi

# Class: OrganizationAccessApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`OrganizationAccessApi`**

## Table of contents

### Constructors

- [constructor](OrganizationAccessApi.md#constructor)

### Properties

- [configuration](OrganizationAccessApi.md#configuration)

### Methods

- [apiV1OrganizationAccessGet](OrganizationAccessApi.md#apiv1organizationaccessget)
- [apiV1OrganizationAccessGetRaw](OrganizationAccessApi.md#apiv1organizationaccessgetraw)
- [apiV1OrganizationAccessGrantGet](OrganizationAccessApi.md#apiv1organizationaccessgrantget)
- [apiV1OrganizationAccessGrantGetRaw](OrganizationAccessApi.md#apiv1organizationaccessgrantgetraw)
- [apiV1OrganizationAccessPut](OrganizationAccessApi.md#apiv1organizationaccessput)
- [apiV1OrganizationAccessPutRaw](OrganizationAccessApi.md#apiv1organizationaccessputraw)
- [request](OrganizationAccessApi.md#request)
- [withMiddleware](OrganizationAccessApi.md#withmiddleware)
- [withPostMiddleware](OrganizationAccessApi.md#withpostmiddleware)
- [withPreMiddleware](OrganizationAccessApi.md#withpremiddleware)

## Constructors

### constructor

• **new OrganizationAccessApi**(`configuration?`)

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

### apiV1OrganizationAccessGet

▸ **apiV1OrganizationAccessGet**(`requestParameters`, `initOverrides?`): `Promise`<[`OrganizationAccess`](../interfaces/OrganizationAccess.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationAccessGetRequest`](../interfaces/ApiV1OrganizationAccessGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OrganizationAccess`](../interfaces/OrganizationAccess.md)[]\>

#### Defined in

[src/apis/OrganizationAccessApi.ts:85](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationAccessApi.ts#L85)

___

### apiV1OrganizationAccessGetRaw

▸ **apiV1OrganizationAccessGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OrganizationAccess`](../interfaces/OrganizationAccess.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationAccessGetRequest`](../interfaces/ApiV1OrganizationAccessGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OrganizationAccess`](../interfaces/OrganizationAccess.md)[]\>\>

#### Defined in

[src/apis/OrganizationAccessApi.ts:48](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationAccessApi.ts#L48)

___

### apiV1OrganizationAccessGrantGet

▸ **apiV1OrganizationAccessGrantGet**(`requestParameters`, `initOverrides?`): `Promise`<[`OrganizationAccess`](../interfaces/OrganizationAccess.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationAccessGrantGetRequest`](../interfaces/ApiV1OrganizationAccessGrantGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OrganizationAccess`](../interfaces/OrganizationAccess.md)[]\>

#### Defined in

[src/apis/OrganizationAccessApi.ts:129](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationAccessApi.ts#L129)

___

### apiV1OrganizationAccessGrantGetRaw

▸ **apiV1OrganizationAccessGrantGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OrganizationAccess`](../interfaces/OrganizationAccess.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationAccessGrantGetRequest`](../interfaces/ApiV1OrganizationAccessGrantGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OrganizationAccess`](../interfaces/OrganizationAccess.md)[]\>\>

#### Defined in

[src/apis/OrganizationAccessApi.ts:92](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationAccessApi.ts#L92)

___

### apiV1OrganizationAccessPut

▸ **apiV1OrganizationAccessPut**(`requestParameters`, `initOverrides?`): `Promise`<[`OrganizationAccess`](../interfaces/OrganizationAccess.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationAccessPutRequest`](../interfaces/ApiV1OrganizationAccessPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OrganizationAccess`](../interfaces/OrganizationAccess.md)[]\>

#### Defined in

[src/apis/OrganizationAccessApi.ts:160](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationAccessApi.ts#L160)

___

### apiV1OrganizationAccessPutRaw

▸ **apiV1OrganizationAccessPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OrganizationAccess`](../interfaces/OrganizationAccess.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationAccessPutRequest`](../interfaces/ApiV1OrganizationAccessPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OrganizationAccess`](../interfaces/OrganizationAccess.md)[]\>\>

#### Defined in

[src/apis/OrganizationAccessApi.ts:136](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationAccessApi.ts#L136)

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
