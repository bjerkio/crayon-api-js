[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / ManagementLinksApi

# Class: ManagementLinksApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ManagementLinksApi`**

## Table of contents

### Constructors

- [constructor](ManagementLinksApi.md#constructor)

### Properties

- [configuration](ManagementLinksApi.md#configuration)

### Methods

- [apiV1ManagementLinksGet](ManagementLinksApi.md#apiv1managementlinksget)
- [apiV1ManagementLinksGetRaw](ManagementLinksApi.md#apiv1managementlinksgetraw)
- [apiV1ManagementLinksGroupedGet](ManagementLinksApi.md#apiv1managementlinksgroupedget)
- [apiV1ManagementLinksGroupedGetRaw](ManagementLinksApi.md#apiv1managementlinksgroupedgetraw)
- [request](ManagementLinksApi.md#request)
- [withMiddleware](ManagementLinksApi.md#withmiddleware)
- [withPostMiddleware](ManagementLinksApi.md#withpostmiddleware)
- [withPreMiddleware](ManagementLinksApi.md#withpremiddleware)

## Constructors

### constructor

• **new ManagementLinksApi**(`configuration?`)

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

### apiV1ManagementLinksGet

▸ **apiV1ManagementLinksGet**(`requestParameters`, `initOverrides?`): `Promise`<[`ManagementLink`](../interfaces/ManagementLink.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ManagementLinksGetRequest`](../interfaces/ApiV1ManagementLinksGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ManagementLink`](../interfaces/ManagementLink.md)[]\>

#### Defined in

[src/apis/ManagementLinksApi.ts:84](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ManagementLinksApi.ts#L84)

___

### apiV1ManagementLinksGetRaw

▸ **apiV1ManagementLinksGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ManagementLink`](../interfaces/ManagementLink.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ManagementLinksGetRequest`](../interfaces/ApiV1ManagementLinksGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ManagementLink`](../interfaces/ManagementLink.md)[]\>\>

#### Defined in

[src/apis/ManagementLinksApi.ts:47](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ManagementLinksApi.ts#L47)

___

### apiV1ManagementLinksGroupedGet

▸ **apiV1ManagementLinksGroupedGet**(`requestParameters`, `initOverrides?`): `Promise`<[`ManagementLinkGrouped`](../interfaces/ManagementLinkGrouped.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ManagementLinksGroupedGetRequest`](../interfaces/ApiV1ManagementLinksGroupedGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ManagementLinkGrouped`](../interfaces/ManagementLinkGrouped.md)[]\>

#### Defined in

[src/apis/ManagementLinksApi.ts:128](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ManagementLinksApi.ts#L128)

___

### apiV1ManagementLinksGroupedGetRaw

▸ **apiV1ManagementLinksGroupedGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ManagementLinkGrouped`](../interfaces/ManagementLinkGrouped.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ManagementLinksGroupedGetRequest`](../interfaces/ApiV1ManagementLinksGroupedGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ManagementLinkGrouped`](../interfaces/ManagementLinkGrouped.md)[]\>\>

#### Defined in

[src/apis/ManagementLinksApi.ts:91](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ManagementLinksApi.ts#L91)

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
