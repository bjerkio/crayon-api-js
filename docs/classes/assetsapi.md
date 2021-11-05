[@bjerkio/crayon-api - v0.0.0](../README.md) › [AssetsApi](assetsapi.md)

# Class: AssetsApi

AssetsApi - object-oriented interface

**`export`** 

**`class`** AssetsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AssetsApi**

## Index

### Constructors

* [constructor](assetsapi.md#constructor)

### Properties

* [basePath](assetsapi.md#protected-basepath)
* [configuration](assetsapi.md#protected-configuration)
* [fetch](assetsapi.md#protected-fetch)

### Methods

* [checkoutAsync](assetsapi.md#checkoutasync)
* [get](assetsapi.md#get)
* [getAssetOrdersAsync](assetsapi.md#getassetordersasync)
* [verifyAsync](assetsapi.md#verifyasync)

## Constructors

###  constructor

\+ **new AssetsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[AssetsApi](assetsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[AssetsApi](assetsapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

## Methods

###  checkoutAsync

▸ **checkoutAsync**(`order?`: [AssetOrder](../interfaces/assetorder.md), `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** AssetsApi

**Parameters:**

Name | Type |
------ | ------ |
`order?` | [AssetOrder](../interfaces/assetorder.md) |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  get

▸ **get**(`resellerCustomerId?`: number, `publisherId?`: number, `externalOrderId?`: string, `externalOrderIds?`: Array‹string›, `reservationId?`: string, `assetType?`: "Reservation" | "Software" | "Subscription", `status?`: "None" | "Fulfilling" | "Succeeded" | "Cancelled" | "All", `page?`: number, `pageSize?`: number, `search?`: string, `options?`: any): *Promise‹[ApiCollectionOfAsset](../interfaces/apicollectionofasset.md)›*

**`throws`** {RequiredError}

**`memberof`** AssetsApi

**Parameters:**

Name | Type |
------ | ------ |
`resellerCustomerId?` | number |
`publisherId?` | number |
`externalOrderId?` | string |
`externalOrderIds?` | Array‹string› |
`reservationId?` | string |
`assetType?` | "Reservation" &#124; "Software" &#124; "Subscription" |
`status?` | "None" &#124; "Fulfilling" &#124; "Succeeded" &#124; "Cancelled" &#124; "All" |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfAsset](../interfaces/apicollectionofasset.md)›*

___

###  getAssetOrdersAsync

▸ **getAssetOrdersAsync**(`resellerCustomerId?`: number, `publisherId?`: number, `externalOrderId?`: string, `externalOrderIds?`: Array‹string›, `reservationId?`: string, `assetType?`: "Reservation" | "Software" | "Subscription", `status?`: "None" | "Fulfilling" | "Succeeded" | "Cancelled" | "All", `page?`: number, `pageSize?`: number, `search?`: string, `options?`: any): *Promise‹[ApiCollectionOfAssetOrder](../interfaces/apicollectionofassetorder.md)›*

**`throws`** {RequiredError}

**`memberof`** AssetsApi

**Parameters:**

Name | Type |
------ | ------ |
`resellerCustomerId?` | number |
`publisherId?` | number |
`externalOrderId?` | string |
`externalOrderIds?` | Array‹string› |
`reservationId?` | string |
`assetType?` | "Reservation" &#124; "Software" &#124; "Subscription" |
`status?` | "None" &#124; "Fulfilling" &#124; "Succeeded" &#124; "Cancelled" &#124; "All" |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfAssetOrder](../interfaces/apicollectionofassetorder.md)›*

___

###  verifyAsync

▸ **verifyAsync**(`order?`: [AssetOrder](../interfaces/assetorder.md), `options?`: any): *Promise‹[AssetOrder](../interfaces/assetorder.md)›*

**`throws`** {RequiredError}

**`memberof`** AssetsApi

**Parameters:**

Name | Type |
------ | ------ |
`order?` | [AssetOrder](../interfaces/assetorder.md) |
`options?` | any |

**Returns:** *Promise‹[AssetOrder](../interfaces/assetorder.md)›*
