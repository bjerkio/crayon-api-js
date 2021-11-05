[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / AssetsApi

# Class: AssetsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AssetsApi`**

## Table of contents

### Constructors

- [constructor](AssetsApi.md#constructor)

### Properties

- [configuration](AssetsApi.md#configuration)

### Methods

- [apiV1AssetsAssetIdPut](AssetsApi.md#apiv1assetsassetidput)
- [apiV1AssetsAssetIdPutRaw](AssetsApi.md#apiv1assetsassetidputraw)
- [apiV1AssetsAssetIdTagsDelete](AssetsApi.md#apiv1assetsassetidtagsdelete)
- [apiV1AssetsAssetIdTagsDeleteRaw](AssetsApi.md#apiv1assetsassetidtagsdeleteraw)
- [apiV1AssetsAssetIdTagsPost](AssetsApi.md#apiv1assetsassetidtagspost)
- [apiV1AssetsAssetIdTagsPostRaw](AssetsApi.md#apiv1assetsassetidtagspostraw)
- [apiV1AssetsAssetIdTagsPut](AssetsApi.md#apiv1assetsassetidtagsput)
- [apiV1AssetsAssetIdTagsPutRaw](AssetsApi.md#apiv1assetsassetidtagsputraw)
- [apiV1AssetsCheckoutPost](AssetsApi.md#apiv1assetscheckoutpost)
- [apiV1AssetsCheckoutPostRaw](AssetsApi.md#apiv1assetscheckoutpostraw)
- [apiV1AssetsGet](AssetsApi.md#apiv1assetsget)
- [apiV1AssetsGetRaw](AssetsApi.md#apiv1assetsgetraw)
- [apiV1AssetsIdGet](AssetsApi.md#apiv1assetsidget)
- [apiV1AssetsIdGetRaw](AssetsApi.md#apiv1assetsidgetraw)
- [apiV1AssetsOrdersGet](AssetsApi.md#apiv1assetsordersget)
- [apiV1AssetsOrdersGetRaw](AssetsApi.md#apiv1assetsordersgetraw)
- [apiV1AssetsVerifyPost](AssetsApi.md#apiv1assetsverifypost)
- [apiV1AssetsVerifyPostRaw](AssetsApi.md#apiv1assetsverifypostraw)
- [request](AssetsApi.md#request)
- [withMiddleware](AssetsApi.md#withmiddleware)
- [withPostMiddleware](AssetsApi.md#withpostmiddleware)
- [withPreMiddleware](AssetsApi.md#withpremiddleware)

## Constructors

### constructor

• **new AssetsApi**(`configuration?`)

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

### apiV1AssetsAssetIdPut

▸ **apiV1AssetsAssetIdPut**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsAssetIdPutRequest`](../interfaces/ApiV1AssetsAssetIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/AssetsApi.ts:137](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L137)

___

### apiV1AssetsAssetIdPutRaw

▸ **apiV1AssetsAssetIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsAssetIdPutRequest`](../interfaces/ApiV1AssetsAssetIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/AssetsApi.ts:109](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L109)

___

### apiV1AssetsAssetIdTagsDelete

▸ **apiV1AssetsAssetIdTagsDelete**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsAssetIdTagsDeleteRequest`](../interfaces/ApiV1AssetsAssetIdTagsDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/AssetsApi.ts:168](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L168)

___

### apiV1AssetsAssetIdTagsDeleteRaw

▸ **apiV1AssetsAssetIdTagsDeleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsAssetIdTagsDeleteRequest`](../interfaces/ApiV1AssetsAssetIdTagsDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/AssetsApi.ts:143](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L143)

___

### apiV1AssetsAssetIdTagsPost

▸ **apiV1AssetsAssetIdTagsPost**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsAssetIdTagsPostRequest`](../interfaces/ApiV1AssetsAssetIdTagsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/AssetsApi.ts:202](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L202)

___

### apiV1AssetsAssetIdTagsPostRaw

▸ **apiV1AssetsAssetIdTagsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsAssetIdTagsPostRequest`](../interfaces/ApiV1AssetsAssetIdTagsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/AssetsApi.ts:174](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L174)

___

### apiV1AssetsAssetIdTagsPut

▸ **apiV1AssetsAssetIdTagsPut**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsAssetIdTagsPutRequest`](../interfaces/ApiV1AssetsAssetIdTagsPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/AssetsApi.ts:236](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L236)

___

### apiV1AssetsAssetIdTagsPutRaw

▸ **apiV1AssetsAssetIdTagsPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsAssetIdTagsPutRequest`](../interfaces/ApiV1AssetsAssetIdTagsPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/AssetsApi.ts:208](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L208)

___

### apiV1AssetsCheckoutPost

▸ **apiV1AssetsCheckoutPost**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsCheckoutPostRequest`](../interfaces/ApiV1AssetsCheckoutPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/AssetsApi.ts:266](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L266)

___

### apiV1AssetsCheckoutPostRaw

▸ **apiV1AssetsCheckoutPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsCheckoutPostRequest`](../interfaces/ApiV1AssetsCheckoutPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/AssetsApi.ts:242](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L242)

___

### apiV1AssetsGet

▸ **apiV1AssetsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Asset`](../interfaces/Asset.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsGetRequest`](../interfaces/ApiV1AssetsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Asset`](../interfaces/Asset.md)[]\>

#### Defined in

[src/apis/AssetsApi.ts:341](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L341)

___

### apiV1AssetsGetRaw

▸ **apiV1AssetsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Asset`](../interfaces/Asset.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsGetRequest`](../interfaces/ApiV1AssetsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Asset`](../interfaces/Asset.md)[]\>\>

#### Defined in

[src/apis/AssetsApi.ts:272](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L272)

___

### apiV1AssetsIdGet

▸ **apiV1AssetsIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Asset`](../interfaces/Asset.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsIdGetRequest`](../interfaces/ApiV1AssetsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Asset`](../interfaces/Asset.md)\>

#### Defined in

[src/apis/AssetsApi.ts:373](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L373)

___

### apiV1AssetsIdGetRaw

▸ **apiV1AssetsIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Asset`](../interfaces/Asset.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsIdGetRequest`](../interfaces/ApiV1AssetsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Asset`](../interfaces/Asset.md)\>\>

#### Defined in

[src/apis/AssetsApi.ts:348](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L348)

___

### apiV1AssetsOrdersGet

▸ **apiV1AssetsOrdersGet**(`requestParameters`, `initOverrides?`): `Promise`<[`AssetOrder`](../interfaces/AssetOrder.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsOrdersGetRequest`](../interfaces/ApiV1AssetsOrdersGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AssetOrder`](../interfaces/AssetOrder.md)[]\>

#### Defined in

[src/apis/AssetsApi.ts:449](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L449)

___

### apiV1AssetsOrdersGetRaw

▸ **apiV1AssetsOrdersGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AssetOrder`](../interfaces/AssetOrder.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsOrdersGetRequest`](../interfaces/ApiV1AssetsOrdersGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AssetOrder`](../interfaces/AssetOrder.md)[]\>\>

#### Defined in

[src/apis/AssetsApi.ts:380](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L380)

___

### apiV1AssetsVerifyPost

▸ **apiV1AssetsVerifyPost**(`requestParameters`, `initOverrides?`): `Promise`<[`AssetOrder`](../interfaces/AssetOrder.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsVerifyPostRequest`](../interfaces/ApiV1AssetsVerifyPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AssetOrder`](../interfaces/AssetOrder.md)\>

#### Defined in

[src/apis/AssetsApi.ts:480](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L480)

___

### apiV1AssetsVerifyPostRaw

▸ **apiV1AssetsVerifyPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AssetOrder`](../interfaces/AssetOrder.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AssetsVerifyPostRequest`](../interfaces/ApiV1AssetsVerifyPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AssetOrder`](../interfaces/AssetOrder.md)\>\>

#### Defined in

[src/apis/AssetsApi.ts:456](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AssetsApi.ts#L456)

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
