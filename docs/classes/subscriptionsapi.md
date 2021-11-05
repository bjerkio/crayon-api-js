[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / SubscriptionsApi

# Class: SubscriptionsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`SubscriptionsApi`**

## Table of contents

### Constructors

- [constructor](SubscriptionsApi.md#constructor)

### Properties

- [configuration](SubscriptionsApi.md#configuration)

### Methods

- [apiV1SubscriptionsGet](SubscriptionsApi.md#apiv1subscriptionsget)
- [apiV1SubscriptionsGetRaw](SubscriptionsApi.md#apiv1subscriptionsgetraw)
- [apiV1SubscriptionsIdActivationlinkGet](SubscriptionsApi.md#apiv1subscriptionsidactivationlinkget)
- [apiV1SubscriptionsIdActivationlinkGetRaw](SubscriptionsApi.md#apiv1subscriptionsidactivationlinkgetraw)
- [apiV1SubscriptionsIdGet](SubscriptionsApi.md#apiv1subscriptionsidget)
- [apiV1SubscriptionsIdGetRaw](SubscriptionsApi.md#apiv1subscriptionsidgetraw)
- [apiV1SubscriptionsIdPut](SubscriptionsApi.md#apiv1subscriptionsidput)
- [apiV1SubscriptionsIdPutRaw](SubscriptionsApi.md#apiv1subscriptionsidputraw)
- [apiV1SubscriptionsIdTransitionEligibilitiesGet](SubscriptionsApi.md#apiv1subscriptionsidtransitioneligibilitiesget)
- [apiV1SubscriptionsIdTransitionEligibilitiesGetRaw](SubscriptionsApi.md#apiv1subscriptionsidtransitioneligibilitiesgetraw)
- [apiV1SubscriptionsIdTransitionPost](SubscriptionsApi.md#apiv1subscriptionsidtransitionpost)
- [apiV1SubscriptionsIdTransitionPostRaw](SubscriptionsApi.md#apiv1subscriptionsidtransitionpostraw)
- [apiV1SubscriptionsPost](SubscriptionsApi.md#apiv1subscriptionspost)
- [apiV1SubscriptionsPostRaw](SubscriptionsApi.md#apiv1subscriptionspostraw)
- [apiV1SubscriptionsReservedInstanceSubscriptionIdIdGet](SubscriptionsApi.md#apiv1subscriptionsreservedinstancesubscriptionididget)
- [apiV1SubscriptionsReservedInstanceSubscriptionIdIdGetRaw](SubscriptionsApi.md#apiv1subscriptionsreservedinstancesubscriptionididgetraw)
- [apiV1SubscriptionsReservedInstanceSubscriptionIdIdPost](SubscriptionsApi.md#apiv1subscriptionsreservedinstancesubscriptionididpost)
- [apiV1SubscriptionsReservedInstanceSubscriptionIdIdPostRaw](SubscriptionsApi.md#apiv1subscriptionsreservedinstancesubscriptionididpostraw)
- [apiV1SubscriptionsSubscriptionIdAddonOffersGet](SubscriptionsApi.md#apiv1subscriptionssubscriptionidaddonoffersget)
- [apiV1SubscriptionsSubscriptionIdAddonOffersGetRaw](SubscriptionsApi.md#apiv1subscriptionssubscriptionidaddonoffersgetraw)
- [apiV1SubscriptionsSubscriptionIdAddonsPost](SubscriptionsApi.md#apiv1subscriptionssubscriptionidaddonspost)
- [apiV1SubscriptionsSubscriptionIdAddonsPostRaw](SubscriptionsApi.md#apiv1subscriptionssubscriptionidaddonspostraw)
- [apiV1SubscriptionsSubscriptionIdConversionsGet](SubscriptionsApi.md#apiv1subscriptionssubscriptionidconversionsget)
- [apiV1SubscriptionsSubscriptionIdConversionsGetRaw](SubscriptionsApi.md#apiv1subscriptionssubscriptionidconversionsgetraw)
- [apiV1SubscriptionsSubscriptionIdConversionsPost](SubscriptionsApi.md#apiv1subscriptionssubscriptionidconversionspost)
- [apiV1SubscriptionsSubscriptionIdConversionsPostRaw](SubscriptionsApi.md#apiv1subscriptionssubscriptionidconversionspostraw)
- [apiV1SubscriptionsSubscriptionIdTagsDelete](SubscriptionsApi.md#apiv1subscriptionssubscriptionidtagsdelete)
- [apiV1SubscriptionsSubscriptionIdTagsDeleteRaw](SubscriptionsApi.md#apiv1subscriptionssubscriptionidtagsdeleteraw)
- [apiV1SubscriptionsSubscriptionIdTagsGet](SubscriptionsApi.md#apiv1subscriptionssubscriptionidtagsget)
- [apiV1SubscriptionsSubscriptionIdTagsGetRaw](SubscriptionsApi.md#apiv1subscriptionssubscriptionidtagsgetraw)
- [apiV1SubscriptionsSubscriptionIdTagsPost](SubscriptionsApi.md#apiv1subscriptionssubscriptionidtagspost)
- [apiV1SubscriptionsSubscriptionIdTagsPostRaw](SubscriptionsApi.md#apiv1subscriptionssubscriptionidtagspostraw)
- [apiV1SubscriptionsSubscriptionpricetypesGet](SubscriptionsApi.md#apiv1subscriptionssubscriptionpricetypesget)
- [apiV1SubscriptionsSubscriptionpricetypesGetRaw](SubscriptionsApi.md#apiv1subscriptionssubscriptionpricetypesgetraw)
- [request](SubscriptionsApi.md#request)
- [withMiddleware](SubscriptionsApi.md#withmiddleware)
- [withPostMiddleware](SubscriptionsApi.md#withpostmiddleware)
- [withPreMiddleware](SubscriptionsApi.md#withpremiddleware)

## Constructors

### constructor

• **new SubscriptionsApi**(`configuration?`)

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

### apiV1SubscriptionsGet

▸ **apiV1SubscriptionsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Subscription`](../interfaces/Subscription.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsGetRequest`](../interfaces/ApiV1SubscriptionsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Subscription`](../interfaces/Subscription.md)[]\>

#### Defined in

[src/apis/SubscriptionsApi.ts:220](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L220)

___

### apiV1SubscriptionsGetRaw

▸ **apiV1SubscriptionsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Subscription`](../interfaces/Subscription.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsGetRequest`](../interfaces/ApiV1SubscriptionsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Subscription`](../interfaces/Subscription.md)[]\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:151](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L151)

___

### apiV1SubscriptionsIdActivationlinkGet

▸ **apiV1SubscriptionsIdActivationlinkGet**(`requestParameters`, `initOverrides?`): `Promise`<[`ActivationLink`](../interfaces/ActivationLink.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsIdActivationlinkGetRequest`](../interfaces/ApiV1SubscriptionsIdActivationlinkGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ActivationLink`](../interfaces/ActivationLink.md)\>

#### Defined in

[src/apis/SubscriptionsApi.ts:252](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L252)

___

### apiV1SubscriptionsIdActivationlinkGetRaw

▸ **apiV1SubscriptionsIdActivationlinkGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ActivationLink`](../interfaces/ActivationLink.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsIdActivationlinkGetRequest`](../interfaces/ApiV1SubscriptionsIdActivationlinkGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ActivationLink`](../interfaces/ActivationLink.md)\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:227](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L227)

___

### apiV1SubscriptionsIdGet

▸ **apiV1SubscriptionsIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsIdGetRequest`](../interfaces/ApiV1SubscriptionsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>

#### Defined in

[src/apis/SubscriptionsApi.ts:284](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L284)

___

### apiV1SubscriptionsIdGetRaw

▸ **apiV1SubscriptionsIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsIdGetRequest`](../interfaces/ApiV1SubscriptionsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:259](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L259)

___

### apiV1SubscriptionsIdPut

▸ **apiV1SubscriptionsIdPut**(`requestParameters`, `initOverrides?`): `Promise`<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsIdPutRequest`](../interfaces/ApiV1SubscriptionsIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>

#### Defined in

[src/apis/SubscriptionsApi.ts:319](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L319)

___

### apiV1SubscriptionsIdPutRaw

▸ **apiV1SubscriptionsIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsIdPutRequest`](../interfaces/ApiV1SubscriptionsIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:291](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L291)

___

### apiV1SubscriptionsIdTransitionEligibilitiesGet

▸ **apiV1SubscriptionsIdTransitionEligibilitiesGet**(`requestParameters`, `initOverrides?`): `Promise`<[`SubscriptionTransitionEligibility`](../interfaces/SubscriptionTransitionEligibility.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsIdTransitionEligibilitiesGetRequest`](../interfaces/ApiV1SubscriptionsIdTransitionEligibilitiesGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SubscriptionTransitionEligibility`](../interfaces/SubscriptionTransitionEligibility.md)[]\>

#### Defined in

[src/apis/SubscriptionsApi.ts:351](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L351)

___

### apiV1SubscriptionsIdTransitionEligibilitiesGetRaw

▸ **apiV1SubscriptionsIdTransitionEligibilitiesGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionTransitionEligibility`](../interfaces/SubscriptionTransitionEligibility.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsIdTransitionEligibilitiesGetRequest`](../interfaces/ApiV1SubscriptionsIdTransitionEligibilitiesGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionTransitionEligibility`](../interfaces/SubscriptionTransitionEligibility.md)[]\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:326](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L326)

___

### apiV1SubscriptionsIdTransitionPost

▸ **apiV1SubscriptionsIdTransitionPost**(`requestParameters`, `initOverrides?`): `Promise`<[`SubscriptionTransitionResponse`](../interfaces/SubscriptionTransitionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsIdTransitionPostRequest`](../interfaces/ApiV1SubscriptionsIdTransitionPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SubscriptionTransitionResponse`](../interfaces/SubscriptionTransitionResponse.md)\>

#### Defined in

[src/apis/SubscriptionsApi.ts:386](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L386)

___

### apiV1SubscriptionsIdTransitionPostRaw

▸ **apiV1SubscriptionsIdTransitionPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionTransitionResponse`](../interfaces/SubscriptionTransitionResponse.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsIdTransitionPostRequest`](../interfaces/ApiV1SubscriptionsIdTransitionPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionTransitionResponse`](../interfaces/SubscriptionTransitionResponse.md)\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:358](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L358)

___

### apiV1SubscriptionsPost

▸ **apiV1SubscriptionsPost**(`requestParameters`, `initOverrides?`): `Promise`<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsPostRequest`](../interfaces/ApiV1SubscriptionsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>

#### Defined in

[src/apis/SubscriptionsApi.ts:417](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L417)

___

### apiV1SubscriptionsPostRaw

▸ **apiV1SubscriptionsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsPostRequest`](../interfaces/ApiV1SubscriptionsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:393](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L393)

___

### apiV1SubscriptionsReservedInstanceSubscriptionIdIdGet

▸ **apiV1SubscriptionsReservedInstanceSubscriptionIdIdGet**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsReservedInstanceSubscriptionIdIdGetRequest`](../interfaces/ApiV1SubscriptionsReservedInstanceSubscriptionIdIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`[]\>

#### Defined in

[src/apis/SubscriptionsApi.ts:453](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L453)

___

### apiV1SubscriptionsReservedInstanceSubscriptionIdIdGetRaw

▸ **apiV1SubscriptionsReservedInstanceSubscriptionIdIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsReservedInstanceSubscriptionIdIdGetRequest`](../interfaces/ApiV1SubscriptionsReservedInstanceSubscriptionIdIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`[]\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:424](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L424)

___

### apiV1SubscriptionsReservedInstanceSubscriptionIdIdPost

▸ **apiV1SubscriptionsReservedInstanceSubscriptionIdIdPost**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsReservedInstanceSubscriptionIdIdPostRequest`](../interfaces/ApiV1SubscriptionsReservedInstanceSubscriptionIdIdPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/apis/SubscriptionsApi.ts:489](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L489)

___

### apiV1SubscriptionsReservedInstanceSubscriptionIdIdPostRaw

▸ **apiV1SubscriptionsReservedInstanceSubscriptionIdIdPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsReservedInstanceSubscriptionIdIdPostRequest`](../interfaces/ApiV1SubscriptionsReservedInstanceSubscriptionIdIdPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:460](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L460)

___

### apiV1SubscriptionsSubscriptionIdAddonOffersGet

▸ **apiV1SubscriptionsSubscriptionIdAddonOffersGet**(`requestParameters`, `initOverrides?`): `Promise`<[`SubscriptionAddOnOffer`](../interfaces/SubscriptionAddOnOffer.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdAddonOffersGetRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdAddonOffersGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SubscriptionAddOnOffer`](../interfaces/SubscriptionAddOnOffer.md)[]\>

#### Defined in

[src/apis/SubscriptionsApi.ts:521](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L521)

___

### apiV1SubscriptionsSubscriptionIdAddonOffersGetRaw

▸ **apiV1SubscriptionsSubscriptionIdAddonOffersGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionAddOnOffer`](../interfaces/SubscriptionAddOnOffer.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdAddonOffersGetRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdAddonOffersGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionAddOnOffer`](../interfaces/SubscriptionAddOnOffer.md)[]\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:496](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L496)

___

### apiV1SubscriptionsSubscriptionIdAddonsPost

▸ **apiV1SubscriptionsSubscriptionIdAddonsPost**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdAddonsPostRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdAddonsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/apis/SubscriptionsApi.ts:556](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L556)

___

### apiV1SubscriptionsSubscriptionIdAddonsPostRaw

▸ **apiV1SubscriptionsSubscriptionIdAddonsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdAddonsPostRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdAddonsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:528](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L528)

___

### apiV1SubscriptionsSubscriptionIdConversionsGet

▸ **apiV1SubscriptionsSubscriptionIdConversionsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`SubscriptionConversion`](../interfaces/SubscriptionConversion.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdConversionsGetRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdConversionsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SubscriptionConversion`](../interfaces/SubscriptionConversion.md)[]\>

#### Defined in

[src/apis/SubscriptionsApi.ts:588](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L588)

___

### apiV1SubscriptionsSubscriptionIdConversionsGetRaw

▸ **apiV1SubscriptionsSubscriptionIdConversionsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionConversion`](../interfaces/SubscriptionConversion.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdConversionsGetRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdConversionsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionConversion`](../interfaces/SubscriptionConversion.md)[]\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:563](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L563)

___

### apiV1SubscriptionsSubscriptionIdConversionsPost

▸ **apiV1SubscriptionsSubscriptionIdConversionsPost**(`requestParameters`, `initOverrides?`): `Promise`<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdConversionsPostRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdConversionsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>

#### Defined in

[src/apis/SubscriptionsApi.ts:623](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L623)

___

### apiV1SubscriptionsSubscriptionIdConversionsPostRaw

▸ **apiV1SubscriptionsSubscriptionIdConversionsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdConversionsPostRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdConversionsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionDetailed`](../interfaces/SubscriptionDetailed.md)\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:595](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L595)

___

### apiV1SubscriptionsSubscriptionIdTagsDelete

▸ **apiV1SubscriptionsSubscriptionIdTagsDelete**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdTagsDeleteRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdTagsDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/SubscriptionsApi.ts:655](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L655)

___

### apiV1SubscriptionsSubscriptionIdTagsDeleteRaw

▸ **apiV1SubscriptionsSubscriptionIdTagsDeleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdTagsDeleteRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdTagsDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:630](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L630)

___

### apiV1SubscriptionsSubscriptionIdTagsGet

▸ **apiV1SubscriptionsSubscriptionIdTagsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`SubscriptionTags`](../interfaces/SubscriptionTags.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdTagsGetRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdTagsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SubscriptionTags`](../interfaces/SubscriptionTags.md)\>

#### Defined in

[src/apis/SubscriptionsApi.ts:686](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L686)

___

### apiV1SubscriptionsSubscriptionIdTagsGetRaw

▸ **apiV1SubscriptionsSubscriptionIdTagsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionTags`](../interfaces/SubscriptionTags.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdTagsGetRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdTagsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionTags`](../interfaces/SubscriptionTags.md)\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:661](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L661)

___

### apiV1SubscriptionsSubscriptionIdTagsPost

▸ **apiV1SubscriptionsSubscriptionIdTagsPost**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdTagsPostRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdTagsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/apis/SubscriptionsApi.ts:721](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L721)

___

### apiV1SubscriptionsSubscriptionIdTagsPostRaw

▸ **apiV1SubscriptionsSubscriptionIdTagsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SubscriptionsSubscriptionIdTagsPostRequest`](../interfaces/ApiV1SubscriptionsSubscriptionIdTagsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:693](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L693)

___

### apiV1SubscriptionsSubscriptionpricetypesGet

▸ **apiV1SubscriptionsSubscriptionpricetypesGet**(`initOverrides?`): `Promise`<[`ObjectReference`](../interfaces/ObjectReference.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ObjectReference`](../interfaces/ObjectReference.md)[]\>

#### Defined in

[src/apis/SubscriptionsApi.ts:749](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L749)

___

### apiV1SubscriptionsSubscriptionpricetypesGetRaw

▸ **apiV1SubscriptionsSubscriptionpricetypesGetRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ObjectReference`](../interfaces/ObjectReference.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ObjectReference`](../interfaces/ObjectReference.md)[]\>\>

#### Defined in

[src/apis/SubscriptionsApi.ts:728](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SubscriptionsApi.ts#L728)

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
