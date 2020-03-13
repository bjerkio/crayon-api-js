[@bjerkio/crayon-api - v0.0.0](../README.md) › [GoogleOrdersApi](googleordersapi.md)

# Class: GoogleOrdersApi

GoogleOrdersApi - object-oriented interface

**`export`** 

**`class`** GoogleOrdersApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **GoogleOrdersApi**

## Index

### Constructors

* [constructor](googleordersapi.md#constructor)

### Properties

* [basePath](googleordersapi.md#protected-basepath)
* [configuration](googleordersapi.md#protected-configuration)
* [fetch](googleordersapi.md#protected-fetch)

### Methods

* [checkoutAsync](googleordersapi.md#checkoutasync)

## Constructors

###  constructor

\+ **new GoogleOrdersApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[GoogleOrdersApi](googleordersapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[GoogleOrdersApi](googleordersapi.md)*

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

▸ **checkoutAsync**(`order?`: [GoogleOrder](../interfaces/googleorder.md), `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** GoogleOrdersApi

**Parameters:**

Name | Type |
------ | ------ |
`order?` | [GoogleOrder](../interfaces/googleorder.md) |
`options?` | any |

**Returns:** *Promise‹Response›*
