[@bjerkio/crayon-api - v0.0.0](../README.md) › [FacebookOrdersApi](facebookordersapi.md)

# Class: FacebookOrdersApi

FacebookOrdersApi - object-oriented interface

**`export`** 

**`class`** FacebookOrdersApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **FacebookOrdersApi**

## Index

### Constructors

* [constructor](facebookordersapi.md#constructor)

### Properties

* [basePath](facebookordersapi.md#protected-basepath)
* [configuration](facebookordersapi.md#protected-configuration)
* [fetch](facebookordersapi.md#protected-fetch)

### Methods

* [checkoutAsync](facebookordersapi.md#checkoutasync)

## Constructors

###  constructor

\+ **new FacebookOrdersApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[FacebookOrdersApi](facebookordersapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[FacebookOrdersApi](facebookordersapi.md)*

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

▸ **checkoutAsync**(`order?`: [FacebookOrder](../interfaces/facebookorder.md), `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** FacebookOrdersApi

**Parameters:**

Name | Type |
------ | ------ |
`order?` | [FacebookOrder](../interfaces/facebookorder.md) |
`options?` | any |

**Returns:** *Promise‹Response›*
