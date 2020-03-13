[@bjerkio/crayon-api - v0.0.0](../README.md) › [CustomerTokenApi](customertokenapi.md)

# Class: CustomerTokenApi

CustomerTokenApi - object-oriented interface

**`export`** 

**`class`** CustomerTokenApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **CustomerTokenApi**

## Index

### Constructors

* [constructor](customertokenapi.md#constructor)

### Properties

* [basePath](customertokenapi.md#protected-basepath)
* [configuration](customertokenapi.md#protected-configuration)
* [fetch](customertokenapi.md#protected-fetch)

### Methods

* [post](customertokenapi.md#post)

## Constructors

###  constructor

\+ **new CustomerTokenApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[CustomerTokenApi](customertokenapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[CustomerTokenApi](customertokenapi.md)*

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

###  post

▸ **post**(`options?`: any): *Promise‹[Token](../interfaces/token.md)›*

**`throws`** {RequiredError}

**`memberof`** CustomerTokenApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[Token](../interfaces/token.md)›*
